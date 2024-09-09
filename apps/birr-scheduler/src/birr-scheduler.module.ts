import { Module } from '@nestjs/common';
import { BirrSchedulerController } from './birr-scheduler.controller';
import { BirrSchedulerService } from './birr-scheduler.service';

@Module({
  imports: [],
  controllers: [BirrSchedulerController],
  providers: [BirrSchedulerService],
})
export class BirrSchedulerModule {}
