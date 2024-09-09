import { DynamicModule, Module, Type } from '@nestjs/common';
import { ShortLinkController } from '../adapters/http/short-link.controller';
import { ShortLinkService } from './short-link.service';

@Module({
  controllers: [ShortLinkController],
  providers: [ShortLinkService],
})
export class BirrCoreModule {
  static withInfrastructure(infrastructureModule: Type | DynamicModule) {
    return {
      module: BirrCoreModule,
      imports: [infrastructureModule],
    };
  }
}
