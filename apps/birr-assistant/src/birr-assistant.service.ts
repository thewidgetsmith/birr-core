import { Injectable } from '@nestjs/common';

@Injectable()
export class BirrAssistantService {
  getHello(): string {
    return 'Hello World!';
  }
}
