import { Injectable } from '@nestjs/common';

@Injectable()
export class BirrSchedulerService {
  getHello(): string {
    return 'Hello World!';
  }
}
