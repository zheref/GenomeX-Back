import {Controller, Get, UseInterceptors} from '@nestjs/common';
import { AppService } from './app.service';
import {AxiosResponse} from 'axios';

@Controller()
@UseInterceptors(AppService)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bye')
  getBye(): string {
    return "bye";
  }

  @Get('example')
  getExample(): Promise<AxiosResponse<any[]>> {
    return this.appService.getExamples().toPromise();
  }

  @Get()
  getPerfectJobs(): string {
    return "perfect jobs";
  }

}
