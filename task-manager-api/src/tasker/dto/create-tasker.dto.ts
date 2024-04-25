import { Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTaskerDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  updatedAt: string;
}
