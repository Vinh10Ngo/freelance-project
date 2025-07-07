// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { DiscountTypeEnum } from 'src/common/enums/discount-type-enum';

@Schema({ timestamps: true })
export class Voucher extends Document {
  @Prop({ required: true, unique: true })
  code: string;
  @Prop()
  description?: string;
  @Prop({ required: true, min: 0 })
  discountValue: number;
  @Prop({ enum: DiscountTypeEnum, default: DiscountTypeEnum.PERCENTAGE })
  discountType: DiscountTypeEnum;
  @Prop({ type: [Types.ObjectId], ref: 'Course' })
  course: Types.ObjectId[];
  @Prop({ default: 0 })
  usageCount: number;

  @Prop()
  usageLimit?: number;
  @Prop()
  startDate: Date;
  @Prop()
  endDate?: Date;
}
export type VoucherDocument = Voucher & Document;
export const VoucherSchema = SchemaFactory.createForClass(Voucher);
