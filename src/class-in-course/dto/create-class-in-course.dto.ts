import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  IsMongoId,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Types } from 'mongoose';

export class CreateClassInCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @Transform(({ value }) => new Types.ObjectId(value))
  @IsMongoId()
  @IsNotEmpty()
  course: string;
  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  startDate: Date;

  @IsDateString()
  endDate?: Date;
}
