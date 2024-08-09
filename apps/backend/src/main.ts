import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Pokemon')
    .setDescription('The Pokemon API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost',
      'http://joshua-sebastian.kim',
      'https://joshua-sebastian.kim',
    ],
  });
  await app.listen(3001);
}
bootstrap();
