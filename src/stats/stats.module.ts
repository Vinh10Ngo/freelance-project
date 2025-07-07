import { Module } from '@nestjs/common';
import { StatsService } from './stats.service';
import { StatsController } from './stats.controller';
import { ClassInCourseModule } from 'src/class-in-course/class-in-course.module';
import { StudentModule } from 'src/student/student.module';
import { CourseModule } from 'src/course/course.module';
import { PaymentModule } from 'src/payment/payment.module';

@Module({
  imports: [CourseModule, ClassInCourseModule, StudentModule, PaymentModule],
  controllers: [StatsController],
  providers: [StatsService],
})
export class StatsModule {}
