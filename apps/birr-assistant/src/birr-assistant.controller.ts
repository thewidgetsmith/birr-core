import { Controller, Get } from '@nestjs/common';
import { BirrAssistantService } from './birr-assistant.service';

@Controller()
export class BirrAssistantController {
  constructor(private readonly birrAssistantService: BirrAssistantService) {}

  @Get()
  getHello(): string {
    return this.birrAssistantService.getHello();
  }
}
