import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Access } from './constants';
import { Genome, OpportunitiesResult, Strength } from './types';
import { buildURLParamsForOpportunitySearch, OpportunitySearchURLParams } from './misc';

const usualHeaders = {
  headers: {
    'Accept': 'application/json',
  },
};

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {
  }

  fetchBio(handle: string): Observable<Genome> {
    return this.httpService.get(
      `${Access.bioBase}/bios/${handle}`,
      usualHeaders)
      .pipe(map(res => res.data));
  }

  fetchMatchesForBio(bio: Genome): Observable<OpportunitiesResult> {
    const urlParams: OpportunitySearchURLParams = {
      lang: 'en',
      size: 73,
      aggregate: true,
    };

    const skillToQuery = (strength: Strength) => ({
      'skill/role': {
        text: strength.name,
        experience: '1-plus-year',
      },
    });

    const requestBody = {
      or: bio.strengths.map(skillToQuery),
    };

    return this.httpService.post(
      `${Access.searchBase}/_search/?${buildURLParamsForOpportunitySearch(urlParams)}`,
      requestBody,
      usualHeaders)
      .pipe(map(res => res.data));
  }

}
