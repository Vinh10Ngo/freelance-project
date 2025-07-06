import { Injectable } from '@nestjs/common';
import { CreateClassInCourseDto } from './dto/create-class-in-course.dto';
import { UpdateClassInCourseDto } from './dto/update-class-in-course.dto';
import { ClassInCourseRepository } from './repository/class-in-course.repository';
import { Types } from 'mongoose';

@Injectable()
export class ClassInCourseService {
  constructor(
    private readonly classInCourseRepository: ClassInCourseRepository,
  ) {}
  async create(createClassInCourseDto: CreateClassInCourseDto) {
    return await this.classInCourseRepository.create(createClassInCourseDto);
  }

  async findAll() {
    return await this.classInCourseRepository.findAll();
  }

  async findOne(id: Types.ObjectId) {
    return await this.classInCourseRepository.findById(id);
  }

  async update(
    id: Types.ObjectId,
    updateClassInCourseDto: UpdateClassInCourseDto,
  ) {
    return await this.classInCourseRepository.updateOne(
      id,
      updateClassInCourseDto,
    );
  }

  async remove(id: Types.ObjectId) {
    return await this.classInCourseRepository.deleleOne(id);
  }
}
