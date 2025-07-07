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
    @InjectModel(ClassInCourse.name)
    private classInCourseModel: Model<ClassInCourse>,
  ) {}

  async create(data: Partial<ClassInCourse>) {
    return await this.classInCourseModel.create(data);
  }

  async findAll() {
    return await this.classInCourseModel.find().exec();
  }

  async findById(id: Types.ObjectId): Promise<ClassInCourseDocument | null> {
    return await this.classInCourseModel.findById(id).populate('course').exec();
  }

  async findByOneEmail(email: string): Promise<ClassInCourseDocument | null> {
    return await this.classInCourseModel.findOne({ email: email }).exec();
  }

  async updateOne(
    id: Types.ObjectId,
    body: object,
  ): Promise<UpdateResult | null> {
    return await this.classInCourseModel.updateOne({ _id: id }, body).exec();
  }
  async deleleOne(id: Types.ObjectId) {
    return await this.classInCourseModel.updateOne({ id }).exec();
  }
}
