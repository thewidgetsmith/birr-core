import { Module } from '@nestjs/common';
import { BirrAssistantController } from './birr-assistant.controller';
import { BirrAssistantService } from './birr-assistant.service';

@Module({
  imports: [],
  controllers: [BirrAssistantController],
  providers: [BirrAssistantService],
})
export class BirrAssistantModule {}
