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

// TYPESCRIPT TYPES
export type JobInitialState = {
  isLoading: boolean;
  error?: string | null;
  jobs: JobInterface[];
};

export type JobInterface = {
  slug: string;
  id: string;
  epoch: string;
  date: string;
  company: string;
  company_logo: string;
  position: string;
  tags: string[];
  description: string;
  original: boolean;
  verified: boolean;
  url: string;
};

export type JobAction =
  | { type: JOB_TYPES.GET_JOB_STARTED }
  | { type: JOB_TYPES.GET_JOB_SUCCESS; payload: JobInterface[] }
  | { type: JOB_TYPES.GET_JOB_ERROR; payload: String };
