import {HttpService, Injectable} from '@nestjs/common';
import {AxiosResponse} from 'axios';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Genome {

}

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getHello(): string {
    return 'Hello World!';
  }

  getExamples(): Observable<AxiosResponse<any[]>> {
    return this.httpService.get('https://bio.torre.co/api/bios/kc', {
      headers: {
        'Accept': 'application/json'
      }
    }).pipe(map(res => res.data));
  }


}
