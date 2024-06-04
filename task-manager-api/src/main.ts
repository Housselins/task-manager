import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    origin: ['http://localhost:3000', 'https://basilisk-precious-starfish.ngrok-free.app', 'https://lively-stone-09330110f.5.azurestaticapps.net'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  await app.listen(3005);
}
bootstrap();
