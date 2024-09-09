import { Test, TestingModule } from '@nestjs/testing';
import { ShortLinkController } from './short-link.controller';
import { ShortLinkService } from '../../application/short-link.service';

describe('ShortLinkController', () => {
  let controller: ShortLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortLinkController],
      providers: [ShortLinkService],
    }).compile();

    controller = module.get<ShortLinkController>(ShortLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
