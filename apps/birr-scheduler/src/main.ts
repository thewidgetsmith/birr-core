import { NestFactory } from '@nestjs/core';
import { BirrSchedulerModule } from './birr-scheduler.module';

async function bootstrap() {
  const app = await NestFactory.create(BirrSchedulerModule);
  await app.listen(3000);
}
bootstrap();
