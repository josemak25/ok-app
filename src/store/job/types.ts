/*
 **************************************************************
 ************************* JOB TYPES  *************************
 **************************************************************
 */

// JOB TYPES
export enum JOB_TYPES {
  GET_JOB_STARTED = 'GET_JOB_STARTED',
  GET_JOB_SUCCESS = 'GET_JOB_SUCCESS',
  GET_JOB_ERROR = 'GET_JOB_ERROR'
}

export enum JOB_ACTION_TYPES {
  FETCH_ALL_JOBS = 'FETCH_ALL_JOBS',
  PAGINATE_JOBS = 'FETCH_ALL_JOBS'
}

// TYPESCRIPT TYPES
export type JobInitialState = {
  isLoading: boolean;
  error?: string | null;
  jobs: {title: string, data: JobInterface[]}[];
};

export type JobInterface = {
  slug: string;
  id: string;
  epoch: string;
  date: Date;
  company: string;
  company_logo: string;
  position: string;
  tags: {name: string, color: string}[];
  description: string;
  original: boolean;
  verified: boolean;
  url: string;
};

export type JobAction =
  | { type: JOB_TYPES.GET_JOB_STARTED }
  | { type: JOB_TYPES.GET_JOB_SUCCESS; payload: {title: string, data: JobInterface[]}[] }
  | { type: JOB_TYPES.GET_JOB_ERROR; payload: String };
