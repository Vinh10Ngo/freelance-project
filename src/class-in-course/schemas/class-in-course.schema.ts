// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class ClassInCourse extends Document {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  description: string;

  @Prop()
  course: Types.ObjectId[];
  @Prop()
  startDate: Date;
  @Prop()
  endDate?: Date;
}
export type ClassInCourseDocument = ClassInCourse & Document;
export const ClassInCourseSchema = SchemaFactory.createForClass(ClassInCourse);
