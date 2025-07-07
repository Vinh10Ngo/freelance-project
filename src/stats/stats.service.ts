import { Injectable } from '@nestjs/common';
import { ClassInCourseService } from 'src/class-in-course/class-in-course.service';
import { CourseService } from 'src/course/course.service';
import { PaymentService } from 'src/payment/payment.service';
import { StudentService } from 'src/student/student.service';

@Injectable()
export class StatsService {
  constructor(
    private readonly courseService: CourseService,
    private readonly classInCourseService: ClassInCourseService,
    private readonly studentService: StudentService,
    private readonly paymentService: PaymentService,
  ) {}
  async overview() {
    let list = {};
    const courses = await this.courseService.findAll();
    const classes = await this.classInCourseService.findAll();
    const students = await this.studentService.findAll();
    const payments = await this.paymentService.findAll();
    const totalCourses: number = courses.length;
    const totalClasses: number = classes.length;
    const totalStudents: number = students.length;
    const totalpayments = payments.reduce(
      (acc, payment) => acc + payment.amount,
      0,
    );
    list = {
      totalCourses: totalCourses,
      totalClasses: totalClasses,
      totalStudents: totalStudents,
      totalpayments: totalpayments,
    };
    return list;
  }
}
