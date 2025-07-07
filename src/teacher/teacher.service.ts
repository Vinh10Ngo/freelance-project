import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeacherRepository } from './repository/teacher.repository';
import { Types } from 'mongoose';

@Injectable()
export class TeacherService {
  constructor(private readonly teacherRepository: TeacherRepository) {}
  async create(createTeacherDto: CreateTeacherDto) {
    return await this.teacherRepository.create(createTeacherDto);
  }

  async findAll() {
    return await this.teacherRepository.findAll();
  }

  async findOne(id: Types.ObjectId) {
    return await this.teacherRepository.findById(id);
  }

  async update(id: Types.ObjectId, updateTeacherDto: UpdateTeacherDto) {
    return await this.teacherRepository.updateOne(id, updateTeacherDto);
  }

  async remove(id: Types.ObjectId) {
    return await this.teacherRepository.deleleOne(id);
  }
  async aggregate(pipelines) {
    return await this.teacherRepository.aggregate(pipelines);
  }
}
