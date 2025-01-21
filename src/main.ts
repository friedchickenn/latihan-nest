import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: "*",
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform : true,
    }));

  const config = new DocumentBuilder()
  .setTitle('Latihan Nest JS Kelas - B')
  .setDescription('Erika Yanti - 105841104322')
  .setVersion('0.1')
  .addTag('Latihan 1')
  .addBearerAuth()
  .build();
  const documentFactory = () => SwaggerModule.createDocument(app,config);
  SwaggerModule.setup ('api-docs', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
