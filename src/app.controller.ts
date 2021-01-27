import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { Genome, LightweightOpportunity } from './types';
import { concatAll, map } from 'rxjs/operators';
import { cleanUpOpportunity } from './misc';

@Controller()
@UseInterceptors(AppService)
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  getIndex(): string {
    return "Index working";
  }

  @Get('bio/:handle')
  getBio(@Param() params): Observable<Genome> {
    return this.appService.fetchBio(params.handle);
  }

  @Get('bestChances/:handle')
  getBestChances(@Param() params): Observable<LightweightOpportunity[]> {
    return this.appService.fetchBio(params.handle).pipe(
      map((genome: Genome) => this.appService.fetchMatchesForBio(genome)),
      concatAll(),
    ).pipe(map(oppResult => oppResult.results.map(cleanUpOpportunity)));
  }

}
