import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  // creates a nest application and pass it to the root of our app, app module
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
