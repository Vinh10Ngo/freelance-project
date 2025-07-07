import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
export class CreateCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;
  @Transform(({ value }) => new Date(value))
  @IsDateString()
  startDate: Date;
  @Transform(({ value }) => new Date(value))
  @IsOptional()
  @IsDateString()
  endDate?: Date;
}
