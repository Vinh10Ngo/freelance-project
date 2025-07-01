// src/swagger.config.ts
import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API docs for my system')
    .setVersion('1.0')
    .addSecurity('basic', {
      type: 'http',
      scheme: 'basic',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
