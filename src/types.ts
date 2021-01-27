export interface BioState {
  lastFetched: Date | null;
  genome: Genome | null;
  isLoading: boolean;
}

export type LinkService = 'instagram' | 'github' | 'linkedin' | 'facebook' | 'twitter' | '';

export interface GenomeLink {
  id: string;
  name: LinkService;
  address: string;
}

export interface GenomePerson {
  professionalHeadline: string;
  completion: number;
  showPhone: boolean;
  verified: boolean;
  weight: number;
  locale: string;
  picture: string;
  name: string;
  links: GenomeLink[];
  pictureThumbnail: string;
  summaryOfBio: string;
  weightGraph: string;
  publicId: string;
  location: BioLocation;
}

export interface Stats {
  jobs: number;
  education: number;
  strengths: number;
  interests: number;
}

export interface Strength {
  id: string;
  code: number;
  name: string;
  weight: number;
  recommendations: number;
}

export interface BioLocation {
  name: string;
  shortName: string;
  country: String;
  latitude: number;
  longitude: number;
  timezone: string;
  timezoneOffSet: number;
}

export interface Org {
  id: string;
  name: string;
  picture?: string;
}

export interface BioExperience {
  id: string;
  category: string;
  name: string;
  organizations: Org[];
  fromMonth: string;
  fromYear: string;
  remote: boolean;
  weight: number;
  toMonth: string;
  toYear: string;
}

export interface Genome {
  person: GenomePerson;
  stats: Stats;
  strengths: Strength[];
  experiences: BioExperience[];
  message?: string;
}

export interface OpportunitiesResult {
  offset: number;
  size: number;
  aggregators: any[];
  results: Opportunity[];
}

export interface OpportunityCompensationData {
  code: string;
  currency: string;
  minAmount: number;
  maxAmount: number;
  periodicity: string;
}

export interface OpportunityCompensation {
  data: OpportunityCompensationData;
  visible: boolean;
}

export interface OpportunitySkill {
  name: string;
  experience: string;
}

export interface Opportunity {
  id: string;
  objective: string;
  type: string;
  organizations: Org[];
  compensation: OpportunityCompensation;
  skills: OpportunitySkill[];

  members: any[];
}

export interface LightweightOpportunity {
  id: string;
  objective: string;
  type: string;
  organizations: Org[];
  compensation: OpportunityCompensation;
  skills: OpportunitySkill[];

  membersCount: number;
}