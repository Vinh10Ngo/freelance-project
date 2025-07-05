// src/users/dto/create-class-in-course.dto.ts
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
  IsMongoId,
} from 'class-validator';

export class CreateClassInCourseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  code: string;

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
