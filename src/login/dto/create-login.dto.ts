import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateLoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsNumberString()
  password: string;
}
