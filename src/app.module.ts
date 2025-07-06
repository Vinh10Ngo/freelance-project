import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';
import { CoursesModule } from './courses/courses.module';
import { ClassInCourseModule } from './class-in-course/class-in-course.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { VoucherModule } from './voucher/voucher.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // để dùng ở mọi nơi
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.mongoDBName}:${process.env.mongoDBPassword}@cluster0.1r1zsfn.mongodb.net/freelance`,
    ),
    UsersModule,
    AuthModule,
    UploadModule,
    CoursesModule,
    ClassInCourseModule,
    StudentModule,
    TeacherModule,
    VoucherModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
