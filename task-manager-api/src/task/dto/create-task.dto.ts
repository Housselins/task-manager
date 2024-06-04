import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNumber()
  statusId: number;

  @IsOptional()
  @IsNumber()
  taskerId: number;

  @IsOptional()
  @IsString()
  endAt: string;

  @IsOptional()
  @IsBoolean()
  active: boolean;

  @IsOptional()
  @IsString()
  createdAt: string;

  @IsOptional()
  @IsString()
  updatedAt: string;
}
