import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseRepository } from './repository/course.repository';
import { Types } from 'mongoose';

@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}
  async create(createCourseDto: CreateCourseDto) {
    return await this.courseRepository.create(createCourseDto);
  }

  async findAll() {
    return await this.courseRepository.findAll();
  }

  async findOne(id: Types.ObjectId) {
    return await this.courseRepository.findById(id);
  }

  async update(id: Types.ObjectId, updateCourseDto: UpdateCourseDto) {
    return await this.courseRepository.updateOne(id, updateCourseDto);
  }

  async remove(id: Types.ObjectId) {
    return await this.courseRepository.deleleOne(id);
  }
}
