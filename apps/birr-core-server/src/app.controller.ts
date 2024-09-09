import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheckService,
  HealthCheck,
  MemoryHealthIndicator,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
    private readonly mongoose: MongooseHealthIndicator,
  ) {}

  @Get('/data-hello')
  getData() {
    return this.appService.getData();
  }

  @Get('/health-check')
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.memory.checkHeap('memory_heap', 150 * 1024 * 1024),
      () => this.memory.checkRSS('memory_rss', 150 * 1024 * 1024),
      () => this.mongoose.pingCheck('mongoose'),
    ]);
  }

  @Get('/debug-sentry')
  getError() {
    throw new Error('Sentry Test Error');
  }
}
