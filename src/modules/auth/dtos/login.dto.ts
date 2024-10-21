import { IsString, IsNotEmpty } from 'class-validator';
import { BishopBase } from './bishop.dto';

export class LoginDto extends BishopBase {
  @IsString()
  @IsNotEmpty()
  stakeId: string;
}
