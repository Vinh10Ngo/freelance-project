import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { constants } from './constant';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${constants.mongoDBName}:${constants.mongoDBPassword}@cluster0.1r1zsfn.mongodb.net/freelance`,
    ),
    ConfigModule.forRoot({
      isGlobal: true, // để dùng ở mọi nơi
    }),
    UsersModule,
    AuthModule,
    UploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
