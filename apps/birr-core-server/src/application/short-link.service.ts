import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateShortLinkCommand } from './commands/create-short-link.command';
import { DestroyShortLinkCommand } from './commands/destroy-short-link.command';
import { FindManyShortLinksQuery } from './queries/find-many-short-links.query';
import { FindOneShortLinkQuery } from './queries/find-one-short-link.query';

@Injectable()
export class ShortLinkService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  create(cmd: CreateShortLinkCommand) {
    return this.commandBus.execute(cmd);
  }

  destroy(cmd: DestroyShortLinkCommand) {
    return this.commandBus.execute(cmd);
  }

  findMany(qry: FindManyShortLinksQuery) {
    return this.queryBus.execute(qry);
  }

  findOne(qry: FindOneShortLinkQuery) {
    return this.queryBus.execute(qry);
  }
}
