// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Document } from 'mongoose';

@Schema()
export class Course extends Document {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  startDate: Date;
  @Prop()
  endDate?: Date;
  @Prop({ type: Types.ObjectId, ref: 'ClassInCourse' })
  classInCourse: [Types.ObjectId];
}
export type CourseDocument = Course & Document;
export const CourseSchema = SchemaFactory.createForClass(Course);
