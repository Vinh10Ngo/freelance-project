import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Types } from 'mongoose';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto) {
    return await this.teacherService.create(createTeacherDto);
  }

  @Get()
  async findAll() {
    return await this.teacherService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Types.ObjectId) {
    return await this.teacherService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: Types.ObjectId,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return await this.teacherService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Types.ObjectId) {
    return await this.teacherService.remove(id);
  }
}
