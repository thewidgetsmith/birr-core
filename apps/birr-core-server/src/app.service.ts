import { Injectable } from '@nestjs/common';
import { LoggerService } from '@birr/logger';

@Injectable()
export class AppService {
  constructor(private readonly loggerService: LoggerService) {}

  getData(): { message: string } {
    this.loggerService.warn('FOOBAR', { foo: 'bar' });
    return { message: 'Hello API' };
  }
}
