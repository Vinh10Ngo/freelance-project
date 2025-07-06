// course.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Course, CourseDocument } from '../schemas/course.schema';
import { Model, UpdateResult } from 'mongoose';
import { Types } from 'mongoose';

@Injectable()
export class CourseRepository {
  constructor(@InjectModel(Course.name) private courseModel: Model<Course>) {}

  async create(data: Partial<Course>) {
    return await this.courseModel.create(data);
  }

  async findAll() {
    return await this.courseModel.find().exec();
  }

  async findById(id: Types.ObjectId): Promise<CourseDocument | null> {
    return await this.courseModel.findOne({ id }).exec();
  }

  async findByOneEmail(email: string): Promise<CourseDocument | null> {
    return await this.courseModel.findOne({ email: email }).exec();
  }

  async updateOne(
    id: Types.ObjectId,
    body: object,
  ): Promise<UpdateResult | null> {
    return await this.courseModel.updateOne({ _id: id }, body).exec();
  }
  async deleleOne(id: Types.ObjectId) {
    return await this.courseModel.updateOne({ id }).exec();
  }
}
