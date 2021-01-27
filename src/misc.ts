import { LightweightOpportunity, Opportunity } from './types';

export interface OpportunitySearchURLParams {
  currency?: string;
  page?: number;
  periodicity?: string;
  lang: string;
  size: number;
  aggregate: boolean;
  offset?: number;
}

export function buildURLParamsForOpportunitySearch(params: OpportunitySearchURLParams): string {
  let assignations = [];
  for (const [key, value] of Object.entries(params)) {
    assignations.push(`${key}=${value}`);
  }
  let builtString = assignations.join('&');
  console.log(`buildString: ${builtString}`);
  return builtString;
}

export function cleanUpOpportunity({
                                     id,
                                     objective,
                                     type,
                                     organizations,
                                     compensation,
                                     skills,
                                     members,
                                   }: Opportunity): LightweightOpportunity {
  return {
    id, objective, type, organizations, compensation, skills,
    membersCount: members.length,
  };
}