import { Module } from '@nestjs/common';
import { ClassInCourseService } from './class-in-course.service';
import { ClassInCourseController } from './class-in-course.controller';
import { ClassInCourseRepository } from './repository/course.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ClassInCourse,
  ClassInCourseSchema,
} from './schemas/class-in-course.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ClassInCourse.name, schema: ClassInCourseSchema },
    ]),
  ],
  controllers: [ClassInCourseController],
  providers: [ClassInCourseService, ClassInCourseRepository],
})
export class ClassInCourseModule {}
