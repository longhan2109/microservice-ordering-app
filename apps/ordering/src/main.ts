import { NestFactory } from '@nestjs/core';
import { OrderingModule } from './ordering.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderingModule);
  await app.listen(3000);
}
bootstrap();
