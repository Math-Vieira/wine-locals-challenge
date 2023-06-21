import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { HttpResponses } from '../../shared/utils/responses/http';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  getHello() {
    try {
      return HttpResponses.parseSuccess(
        this.appService.getHello(),
        HttpStatus.OK,
      );
    } catch (err) {
      HttpResponses.throwException(err, err?.status);
    }
  }
}