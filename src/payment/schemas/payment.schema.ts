// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Payment {
  @Prop({ type: Types.ObjectId, ref: 'Student', required: true })
  student: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'ClassInCourse', required: true })
  classInCourse: Types.ObjectId;

  @Prop({ required: true })
  amount: number;

  @Prop()
  originalAmount?: number;

  @Prop({ type: Types.ObjectId, ref: 'Voucher' })
  voucher?: Types.ObjectId;

  @Prop({ required: true })
  paidAt: Date;

  @Prop()
  method?: string;

  @Prop()
  note?: string;

  @Prop({ default: false })
  isDeleted: boolean;
}
export type PaymentDocument = Payment & Document;
export const PaymentSchema = SchemaFactory.createForClass(Payment);
