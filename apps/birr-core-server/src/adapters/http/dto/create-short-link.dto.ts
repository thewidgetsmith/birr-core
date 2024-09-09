import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateShortLinkDto {
  @ApiProperty()
  @IsString()
  destinationUrl: string;
}
