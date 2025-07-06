import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ClassInCourseService } from './class-in-course.service';
import { CreateClassInCourseDto } from './dto/create-class-in-course.dto';
import { UpdateClassInCourseDto } from './dto/update-class-in-course.dto';
import { Types } from 'mongoose';

@Controller('class-in-course')
export class ClassInCourseController {
  constructor(private readonly classInCourseService: ClassInCourseService) {}

  @Post()
  async create(@Body() createClassInCourseDto: CreateClassInCourseDto) {
    return await this.classInCourseService.create(createClassInCourseDto);
  }

  @Get()
  async findAll() {
    return await this.classInCourseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Types.ObjectId) {
    return await this.classInCourseService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: Types.ObjectId,
    @Body() updateClassInCourseDto: UpdateClassInCourseDto,
  ) {
    return await this.classInCourseService.update(id, updateClassInCourseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Types.ObjectId) {
    return await this.classInCourseService.remove(id);
  }
}
