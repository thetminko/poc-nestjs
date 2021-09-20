import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/api.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule, {
    logger: ['error', 'warn'],
  });
  app.setGlobalPrefix('api');
  await app.listen(3000);
}

bootstrap();
