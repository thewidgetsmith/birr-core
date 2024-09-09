import { Module } from '@nestjs/common';
import { BirrNotificationsController } from './birr-notifications.controller';
import { BirrNotificationsService } from './birr-notifications.service';

@Module({
  imports: [],
  controllers: [BirrNotificationsController],
  providers: [BirrNotificationsService],
})
export class BirrNotificationsModule {}
