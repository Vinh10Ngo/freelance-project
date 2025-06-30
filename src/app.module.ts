import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { constants } from './constant';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${constants.mongoDBName}:${constants.mongoDBPassword}@cluster0.1r1zsfn.mongodb.net/freelance`,
    ),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
