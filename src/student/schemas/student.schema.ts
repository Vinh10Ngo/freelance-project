// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { GenderEnum } from 'src/common/enums/gender.enum';

@Schema({ timestamps: true })
export class Student {
  @Prop({ required: true })
  fullName: string;

  @Prop({ unique: true, required: true })
  studentCode: string;

  @Prop()
  gender?: GenderEnum;

  @Prop()
  dateOfBirth?: Date;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  address?: string;

  @Prop({ type: [Types.ObjectId], ref: 'ClassInCourse' })
  classInCourse?: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Course' })
  course?: Types.ObjectId[];

  @Prop({ type: [Types.ObjectId], ref: 'Voucher' })
  voucher: Types.ObjectId[];

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDeleted: boolean;
}
export type StudentDocument = Student & Document;
export const StudentSchema = SchemaFactory.createForClass(Student);
