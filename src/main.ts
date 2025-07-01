import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './common/swagger/swagger.config';
import * as dotenv from 'dotenv';
import { join } from 'path';
async function bootstrap() {
  dotenv.config({ path: join(__dirname, '..', '.env') });
  const app = await NestFactory.create(AppModule);

  await app.listen(process.env.PORT ?? 3000);
  app.useGlobalPipes(new ValidationPipe());
  setupSwagger(app);
}
bootstrap();
