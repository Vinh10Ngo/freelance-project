import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CourseRepository } from './repository/course.repository';
import { Types } from 'mongoose';

@Injectable()
export class CoursesService {
  constructor(private readonly courseRepository: CourseRepository) {}
  create(createCourseDto: CreateCourseDto) {
    return this.courseRepository.create(createCourseDto);
  }

  async findAll(): Promise<any> {
    return await this.courseRepository.findAll();
  }

  findOne(id: Types.ObjectId) {
    return this.courseRepository.findById(id);
  }

  update(id: Types.ObjectId, updateCourseDto: UpdateCourseDto) {
    return this.courseRepository.updateOne(id, updateCourseDto);
  }

  remove(id: Types.ObjectId) {
    return this.courseRepository.deleleOne(id);
  }
}
