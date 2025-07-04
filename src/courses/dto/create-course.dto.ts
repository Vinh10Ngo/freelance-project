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

  @IsOptional()
  @IsNumber()
  voucher?: number;

  @IsNumber()
  price: number;

  @IsDateString()
  startDate: Date;

  @IsOptional()
  @IsDateString()
  endDate?: Date;
}
