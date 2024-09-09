import { NestFactory } from '@nestjs/core';
import { BirrAssistantModule } from './birr-assistant.module';

async function bootstrap() {
  const app = await NestFactory.create(BirrAssistantModule);
  await app.listen(3000);
}
bootstrap();
