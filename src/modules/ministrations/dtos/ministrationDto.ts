import { IsEnum, IsNotEmpty, IsString, IsMongoId } from 'class-validator';
import { MinistrationType } from '../models/ministration';

export class MinistrationDto {
  @IsEnum(MinistrationType)
  type: MinistrationType;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsMongoId()
  @IsNotEmpty()
  bishopId: string;

  @IsMongoId()
  @IsNotEmpty()
  wardId: string;
}

export type UpdateMinistrationDto = Partial<MinistrationDto>;
