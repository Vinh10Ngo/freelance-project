// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { GenderEnum } from 'src/common/enums/gender.enum';

@Schema({ timestamps: true })
export class Teacher {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  teacherCode: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  phoneNumber?: string;

  @Prop()
  address?: string;

  @Prop()
  dateOfBirth?: Date;

  @Prop({ enum: GenderEnum })
  gender?: GenderEnum;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: false })
  isDeleted: boolean;
}

export type TeacherDocument = Teacher & Document;
export const TeacherSchema = SchemaFactory.createForClass(Teacher);
