import type { NestApplicationOptions } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { nodeProfilingIntegration } from '@sentry/profiling-node';
import * as Sentry from '@sentry/nestjs';

import { Logger, LoggerService } from '@birr/logger';
import { AppModule } from './app.module';
import { environment } from './config';

const env = environment();

Sentry.init({
  dsn: env.sentry.dsn,
  enabled: env.sentry.enabled,
  integrations: [nodeProfilingIntegration()],
  profilesSampleRate: env.sentry.profilesSampleRate,
  tracesSampleRate: env.sentry.tracesSampleRate,
  serverName: `${env.app.slug}@${env.app.version}`,
});

async function bootstrap() {
  const logger = new Logger({
    isProduction: env.isProduction,
    component: `${env.app.slug}@${env.app.version}`,
  });

  // for production environments, disable the default logger entirely
  const startupParams: Partial<NestApplicationOptions> = env.isProduction
    ? { logger: false }
    : {};

  const app = await NestFactory.create(AppModule, startupParams);
  const configService = app.get(ConfigService);

  const globalPrefix = configService.get<string>('api.globalPrefix');
  const runPort = configService.get<number>('port');
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(LoggerService));
  app.setGlobalPrefix(globalPrefix);

  if (configService.get<string>('api.isCorsEnabled')) {
    app.enableCors();
  }

  const swaggerConfig = new DocumentBuilder()
    .setDescription(configService.get<string>('api.description'))
    .setVersion(configService.get<string>('api.version'))
    .setTitle(configService.get<string>('api.name'))
    .build();


  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(globalPrefix, app, document);

  await app
    .listen(runPort, () => {
      logger.warn(`🚀 STARTED: http://localhost:${runPort}/${globalPrefix}`);
    })
    .catch((error) => {
      logger.error('💀 FAILED to start the server', error);
      process.exit(1);
    });
}

bootstrap();
