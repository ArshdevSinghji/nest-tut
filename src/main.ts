import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true })); //using global eradicates the need of adding validatePipe in @Body
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
