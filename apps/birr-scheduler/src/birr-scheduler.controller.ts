import { Controller, Get } from '@nestjs/common';
import { BirrSchedulerService } from './birr-scheduler.service';

@Controller()
export class BirrSchedulerController {
  constructor(private readonly birrSchedulerService: BirrSchedulerService) {}

  @Get()
  getHello(): string {
    return this.birrSchedulerService.getHello();
  }
}
