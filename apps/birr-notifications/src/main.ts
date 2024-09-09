import { NestFactory } from '@nestjs/core';
import { BirrNotificationsModule } from './birr-notifications.module';

async function bootstrap() {
  const app = await NestFactory.create(BirrNotificationsModule);
  await app.listen(3000);
}
bootstrap();
