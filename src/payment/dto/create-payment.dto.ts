// src/payments/dto/create-payment.dto.ts
import { Transform } from 'class-transformer';
import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsDateString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreatePaymentDto {
  @Transform(({ value }) => new Types.ObjectId(value))
  @IsMongoId()
  @IsNotEmpty()
  student: Types.ObjectId;
  @Transform(({ value }) => new Types.ObjectId(value))
  @IsMongoId()
  @IsNotEmpty()
  classInCourse: Types.ObjectId;
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsNumber()
  @IsOptional()
  originalAmount?: number;
  @Transform(({ value }) => new Types.ObjectId(value))
  @IsMongoId()
  @IsOptional()
  voucher?: Types.ObjectId;

  @Transform(({ value }) => new Date(value))
  @IsDateString()
  @IsNotEmpty()
  paidAt: Date;

  @IsString()
  @IsOptional()
  method?: string;
  @IsString()
  @IsOptional()
  note?: string;

  @IsOptional()
  isDeleted?: boolean;
}
