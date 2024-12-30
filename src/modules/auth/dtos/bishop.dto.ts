import { IsString, IsNotEmpty } from 'class-validator';

export class BishopBase {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  wardId: string;
}

export class BishopDto extends BishopBase {
  @IsString()
  @IsNotEmpty()
  name: string;
}
