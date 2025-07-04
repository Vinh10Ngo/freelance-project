import { Injectable } from '@nestjs/common';
import { CreateClassInCourseDto } from './dto/create-class-in-course.dto';
import { UpdateClassInCourseDto } from './dto/update-class-in-course.dto';
import { ClassInCourseRepository } from './repository/course.repository';
import { Types } from 'mongoose';

@Injectable()
export class ClassInCourseService {
  constructor(
    private readonly classInCourseRepository: ClassInCourseRepository,
  ) {}
  create(createClassInCourseDto: CreateClassInCourseDto) {
    return this.classInCourseRepository.create(createClassInCourseDto);
  }

  findAll() {
    return this.classInCourseRepository.findAll();
  }

  findOne(id: Types.ObjectId) {
    return this.classInCourseRepository.findById(id);
  }

  update(id: Types.ObjectId, updateClassInCourseDto: UpdateClassInCourseDto) {
    return this.classInCourseRepository.updateOne(id, updateClassInCourseDto);
  }

  remove(id: Types.ObjectId) {
    return this.classInCourseRepository.deleleOne(id);
  }
}
