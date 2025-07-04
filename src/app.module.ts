import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // để dùng ở mọi nơi
    }),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.mongoDBName}:${process.env.mongoDBPassword}@cluster0.1r1zsfn.mongodb.net/freelance`,
    ),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
