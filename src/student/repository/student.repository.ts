// classInStudent.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocument } from '../schemas/student.schema';
import { Model, UpdateResult } from 'mongoose';
import { Types } from 'mongoose';

@Injectable()
export class StudentRepository {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}

  async create(data: Partial<Student>) {
    return await this.studentModel.create(data);
  }

  async findAll() {
    return await this.studentModel.find().exec();
  }

  async findById(id: Types.ObjectId): Promise<StudentDocument | null> {
    return await this.studentModel.findOne({ id }).exec();
  }

  async findByOneEmail(email: string): Promise<StudentDocument | null> {
    return await this.studentModel.findOne({ email: email }).exec();
  }

  async updateOne(
    id: Types.ObjectId,
    body: object,
  ): Promise<UpdateResult | null> {
    return await this.studentModel.updateOne({ _id: id }, body).exec();
  }
  async deleleOne(id: Types.ObjectId) {
    return await this.studentModel.deleteOne({ _id: id }).exec();
  }
}
