import { Injectable } from '@nestjs/common';
import { ClassInCourseService } from 'src/class-in-course/class-in-course.service';
import { CourseService } from 'src/course/course.service';
import { PaymentService } from 'src/payment/payment.service';
import { StudentService } from 'src/student/student.service';
import { totalCoursesPipeline } from '../course/pipelines/total-course.pipeline';
import { totalClassesPipeline } from 'src/class-in-course/pipelines/total-classes.pipeline';
import { totalStudentsPipeline } from 'src/student/pipelines/total-students.pipeline';
import { totalPaymentsPipeline } from 'src/payment/pipelines/total-payment.pipeline';

@Injectable()
export class StatsService {
  constructor(
    private readonly courseService: CourseService,
    private readonly classInCourseService: ClassInCourseService,
    private readonly studentService: StudentService,
    private readonly paymentService: PaymentService,
  ) {}
  async overviewAggregate() {
    const [totalCourses, totalClasses, totalStudents, totalPayments] =
      await Promise.all([
        this.courseService.aggregate(totalCoursesPipeline),
        this.classInCourseService.aggregate(totalClassesPipeline),
        this.studentService.aggregate(totalStudentsPipeline),
        this.paymentService.aggregate(totalPaymentsPipeline),
      ]);
    return {
      totalCourses: totalCourses[0]?.totalCourses || 0,
      totalClasses: totalClasses[0]?.totalClasses || 0,
      totalStudents: totalStudents[0]?.totalStudents || 0,
      totalPayments: totalPayments[0]?.totalPayments || 0,
    };
  }
}
