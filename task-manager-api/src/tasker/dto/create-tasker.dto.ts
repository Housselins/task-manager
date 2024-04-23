import { Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateTaskerDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  active: boolean;

  @IsString()
  passwords: string;

  @IsString()
  updatedAt: string;
}
