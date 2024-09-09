import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class UserAccountFactory {
  constructor(private readonly eventPublisher: EventPublisher) {}
}
