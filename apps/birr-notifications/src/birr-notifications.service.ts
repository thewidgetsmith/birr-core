import { Injectable } from '@nestjs/common';

@Injectable()
export class BirrNotificationsService {
  getHello(): string {
    return 'Hello World!';
  }
}
