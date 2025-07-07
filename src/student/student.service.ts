import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentRepository } from './repository/student.repository';
import { Types } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(private readonly studentRepository: StudentRepository) {}
  async create(createStudentDto: CreateStudentDto) {
    return await this.studentRepository.create(createStudentDto);
  }

  async findAll() {
    return await this.studentRepository.findAll();
  }

  async findOne(id: Types.ObjectId) {
    return await this.studentRepository.findById(id);
  }

  async update(id: Types.ObjectId, updateStudentDto: UpdateStudentDto) {
    return await this.studentRepository.updateOne(id, updateStudentDto);
  }

  async remove(id: Types.ObjectId) {
    return await this.studentRepository.deleleOne(id);
  }
  async aggregate(pipelines) {
    return await this.studentRepository.aggregate(pipelines);
  }
}
