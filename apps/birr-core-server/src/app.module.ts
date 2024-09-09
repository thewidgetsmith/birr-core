import { APP_FILTER } from '@nestjs/core';
import { BullModule } from '@nestjs/bull';
import { HttpModule } from '@nestjs/axios';
// import { GraphQLModule } from '@nestjs/graphql';
import { Module, OnApplicationShutdown } from '@nestjs/common';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SentryGlobalFilter, SentryModule } from '@sentry/nestjs/setup';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule } from '@nestjs/terminus';
// import { ExtendedGqlExecutionContext } from '@birr/common/interfaces';
import { Logger, LoggerModule } from '@birr/logger';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from './config';

const env = environment();

// function extractTokenFromRequest(req): string | null {
//   const authorization: string | undefined = req.headers.authorization;
//   return authorization?.includes('Bearer ')
//     ? authorization.split(' ')?.[1]
//     : null;
// }

@Module({
  imports: [
    SentryModule.forRoot(),
    ConfigModule.forRoot({
      load: [environment],
    }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        url: configService.get<string>('queue.redis.uri'),
      }),
    }),
    HttpModule.register({
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        Connection: 'keep-alive',
      },
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   autoSchemaFile: './schema.graphql',
    //   driver: ApolloDriver,
    //   path: '/gql',
    //   introspection: true,
    //   playground: true,
    //   sortSchema: true,
    //   context: ({
    //     req,
    //     res,
    //     payload,
    //     connection,
    //   }): ExtendedGqlExecutionContext => {
    //     const token = extractTokenFromRequest(req);
    //     return {
    //       req,
    //       res,
    //       token,
    //       payload,
    //       connection,
    //     };
    //   },
    // }),
    LoggerModule.forRoot({
      isProduction: env.isProduction,
      component: `${env.app.slug}@${env.app.version}`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.mongo.uri'),
      }),
      inject: [ConfigService],
    }),
    TerminusModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
    AppService,
  ],
})
export class AppModule implements OnApplicationShutdown {
  onApplicationShutdown(signal: string): void {
    new Logger({
      component: `${env.app.slug}@${env.app.version}`,
      isProduction: env.isProduction,
    }).debug(`Application shut down (signal: ${signal})`, {});
  }
}
