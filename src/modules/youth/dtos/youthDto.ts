import {
  IsString,
  IsEnum,
  IsDateString,
  IsNotEmpty,
  IsMongoId,
} from 'class-validator';
import { Gender } from '../models/youth';

export class YouthDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  cellphone: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsMongoId()
  wardId: string;
}

export class UpdateYouthDto extends YouthDto {}
