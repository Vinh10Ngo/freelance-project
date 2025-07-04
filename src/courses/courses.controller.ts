import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Types } from 'mongoose';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Types.ObjectId) {
    return this.coursesService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: Types.ObjectId,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: Types.ObjectId) {
    return this.coursesService.remove(id);
  }
}
