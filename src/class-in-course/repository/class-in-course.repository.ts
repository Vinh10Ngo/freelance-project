// classInClassInCourse.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  ClassInCourse,
  ClassInCourseDocument,
} from '../schemas/class-in-course.schema';
import { Model, UpdateResult } from 'mongoose';
import { Types } from 'mongoose';

@Injectable()
export class ClassInCourseRepository {
  constructor(
    @InjectModel(ClassInCourse.name) private courseModel: Model<ClassInCourse>,
  ) {}

  async create(data: Partial<ClassInCourse>) {
    return this.courseModel.create(data);
  }

  async findAll() {
    return this.courseModel.find().exec();
  }

  async findById(id: Types.ObjectId): Promise<ClassInCourseDocument | null> {
    return this.courseModel.findOne({ id }).exec();
  }

  async findByOneEmail(email: string): Promise<ClassInCourseDocument | null> {
    return this.courseModel.findOne({ email: email }).exec();
  }

  async updateOne(
    id: Types.ObjectId,
    body: object,
  ): Promise<UpdateResult | null> {
    return this.courseModel.updateOne({ _id: id }, body).exec();
  }
  async deleleOne(id: Types.ObjectId) {
    return this.courseModel.updateOne({ id }).exec();
  }
}
