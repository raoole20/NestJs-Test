import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const description = `API to manage a DynamonDB database of students.

  Creator: Raul Espina FullStack Developer \n
  email: espinaraul8@gmail.com`
  const options = new DocumentBuilder()
    .setTitle('API Rest Full Students')
    .setDescription(description)
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api/docs', app, document, {
    explorer: true,
    swaggerOptions: {
      filter: true,
      showRequestDuration: true
    }
  }) 

  await app.listen(3000);
}
bootstrap();
