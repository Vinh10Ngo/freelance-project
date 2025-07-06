// src/users/dto/create-student.dto.ts
import {
  IsArray,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsMongoId,
} from 'class-validator';
import { GenderEnum } from 'src/common/enums/gender.enum';
import { Types } from 'mongoose';
import { Transform } from 'class-transformer';

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  studentCode: string;

  @IsEnum(GenderEnum)
  @IsOptional()
  gender?: GenderEnum;

  @Transform(({ value }) => new Types.ObjectId(value))
  @IsDateString()
  @IsOptional()
  dateOfBirth?: Date;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  classInCourse?: Types.ObjectId[];

  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  course?: Types.ObjectId[];

  @IsArray()
  @IsMongoId({ each: true })
  @IsOptional()
  vouchers?: Types.ObjectId[];

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  isDeleted?: boolean;
}
