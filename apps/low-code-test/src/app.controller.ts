import { Controller, Get, Version, VERSION_NEUTRAL } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { BusinessException } from './common/filter/exceptions/business.exception';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService
  ) {}
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  @Version([VERSION_NEUTRAL, "1"])
  findAll() {
    return "I am old one";
  }

  @Get()
  @Version("2")
  findAll2() {
    return "I am new one";
  }

}
