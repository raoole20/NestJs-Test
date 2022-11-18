import { Controller, Get } from '@nestjs/common';
import { Route } from 'tsoa'
import { AppService } from './app.service';

@Controller('/example')
@Route('/example')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }
}
