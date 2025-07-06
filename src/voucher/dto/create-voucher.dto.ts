// src/users/dto/create-class-in-course.dto.ts
import { Transform } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  Min,
  IsEnum,
  IsArray,
  IsMongoId,
  IsDateString,
} from 'class-validator';
import { Types } from 'mongoose';
import { DiscountTypeEnum } from 'src/common/enums/discount-type-enum';

export class CreateVoucherDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @Min(0)
  discountValue: number;

  @IsEnum(DiscountTypeEnum)
  @IsOptional()
  discountType?: DiscountTypeEnum = DiscountTypeEnum.PERCENTAGE;

  @IsArray()
  @Transform(({ value }) => new Types.ObjectId(value))
  @IsMongoId({ each: true })
  @IsOptional()
  courses?: Types.ObjectId[];

  @IsNumber()
  @IsOptional()
  @Min(0)
  usageCount?: number = 0;

  @IsNumber()
  @IsOptional()
  @Min(0)
  usageLimit?: number;
  @Transform(({ value }) => new Date(value))
  @IsDateString()
  @IsNotEmpty()
  startDate: Date;

  @IsDateString()
  @IsOptional()
  endDate?: Date;
}
