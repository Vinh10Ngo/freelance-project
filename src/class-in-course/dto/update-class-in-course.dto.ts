import { PartialType } from '@nestjs/swagger';
import { CreateClassInCourseDto } from './create-class-in-course.dto';

export class UpdateClassInCourseDto extends PartialType(
  CreateClassInCourseDto,
) {}
