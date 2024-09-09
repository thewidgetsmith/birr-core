import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class ShortenedLinkFactory {
  constructor(private readonly eventPublisher: EventPublisher) {}
}
