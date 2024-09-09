import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { CreateShortLinkCommand } from '../../application/commands/create-short-link.command';
import { DestroyShortLinkCommand } from '../../application/commands/destroy-short-link.command';
import { FindManyShortLinksQuery } from '../../application/queries/find-many-short-links.query';
import { FindOneShortLinkQuery } from '../../application/queries/find-one-short-link.query';
import { ShortLinkService } from '../../application/short-link.service';
import { CreateShortLinkDto } from './dto/create-short-link.dto';

@Controller('short-links')
export class ShortLinkController {
  constructor(private readonly shortLinkService: ShortLinkService) {}

  @Post()
  create(@Body() dto: CreateShortLinkDto) {
    const cmd = new CreateShortLinkCommand(dto.destinationUrl);
    return this.shortLinkService.create(cmd);
  }

  @Patch(':id')
  destroy(@Param('id') id: string) {
    const cmd = new DestroyShortLinkCommand(id);
    return this.shortLinkService.destroy(cmd);
  }

  @Get()
  findAll() {
    const qry = new FindManyShortLinksQuery();
    return this.shortLinkService.findMany(qry);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const qry = new FindOneShortLinkQuery(id);
    return this.shortLinkService.findOne(qry);
  }
}
