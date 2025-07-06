// classInTeacher.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher, TeacherDocument } from '../schemas/teacher.schema';
import { Model, UpdateResult } from 'mongoose';
import { Types } from 'mongoose';

@Injectable()
export class TeacherRepository {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) {}

  async create(data: Partial<Teacher>) {
    return await this.teacherModel.create(data);
  }

  async findAll() {
    return await this.teacherModel.find().exec();
  }

  async findById(id: Types.ObjectId): Promise<TeacherDocument | null> {
    return await this.teacherModel.findOne({ id }).exec();
  }

  async findByOneEmail(email: string): Promise<TeacherDocument | null> {
    return await this.teacherModel.findOne({ email: email }).exec();
  }

  async updateOne(
    id: Types.ObjectId,
    body: object,
  ): Promise<UpdateResult | null> {
    return await this.teacherModel.updateOne({ _id: id }, body).exec();
  }
  async deleleOne(id: Types.ObjectId) {
    return await this.teacherModel.deleteOne({ _id: id }).exec();
  }
}
