import { Controller, Get } from '@nestjs/common';
import { BirrNotificationsService } from './birr-notifications.service';

@Controller()
export class BirrNotificationsController {
  constructor(private readonly birrNotificationsService: BirrNotificationsService) {}

  @Get()
  getHello(): string {
    return this.birrNotificationsService.getHello();
  }
}
