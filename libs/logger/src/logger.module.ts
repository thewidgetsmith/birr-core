import type { LoggerModuleOptions } from './types';

import { DynamicModule, Global, Module } from '@nestjs/common';
import { LOGGER_MODULE_OPTIONS } from './constants';
import { LoggerService } from './logger.service';

@Global()
@Module({})
export class LoggerModule {
  static forRoot(options: LoggerModuleOptions): DynamicModule {
    return {
      module: LoggerModule,
      providers: [
        {
          provide: LOGGER_MODULE_OPTIONS,
          useValue: options,
        },
        LoggerService,
      ],
      exports: [LoggerService],
    };
  }
}
