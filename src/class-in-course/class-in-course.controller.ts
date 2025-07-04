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
  create(@Body() createClassInCourseDto: CreateClassInCourseDto) {
    return this.classInCourseService.create(createClassInCourseDto);
  }

  @Get()
  findAll() {
    return this.classInCourseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Types.ObjectId) {
    return this.classInCourseService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: Types.ObjectId,
    @Body() updateClassInCourseDto: UpdateClassInCourseDto,
  ) {
    return this.classInCourseService.update(id, updateClassInCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Types.ObjectId) {
    return this.classInCourseService.remove(id);
  }
}
