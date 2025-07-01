// src/users/schemas/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  phone?: string;
  @Prop()
  avatar?: string;

  @Prop()
  gender?: string;
  @Prop()
  dateOfBirth?: string;
  @Prop()
  role: string;
}
export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
