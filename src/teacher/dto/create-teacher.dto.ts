import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';
import { GenderEnum } from 'src/common/enums/gender.enum';

export class CreateTeacherDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsNotEmpty()
  teacherCode: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  phoneNumber?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @Transform(({ value }) => new Date(value))
  @IsDateString()
  @IsOptional()
  dateOfBirth?: Date;

  @IsEnum(GenderEnum)
  @IsOptional()
  gender?: GenderEnum;

  @IsOptional()
  isActive?: boolean;

  @IsOptional()
  isDeleted?: boolean;
}
