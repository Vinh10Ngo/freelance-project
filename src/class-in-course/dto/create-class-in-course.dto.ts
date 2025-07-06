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
  course: Types.ObjectId;
  @IsString()
  @IsOptional()
  description?: string;

  @Transform(({ value }) => new Date(value))
  @IsDateString()
  startDate: Date;
  @Transform(({ value }) => new Date(value))
  @IsDateString()
  endDate?: Date;
}
