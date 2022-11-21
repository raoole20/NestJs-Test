import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { StudentController } from './controllers/StudentController';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    })
  ],
  controllers: [StudentController],
  providers: [],
})
export class AppModule {}
