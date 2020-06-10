import { JOB_TYPES, JobInitialState, JobAction } from './types';

export const jobInitialState = {
  isLoading: false,
  error: null,
  jobs: []
} as JobInitialState;

export default function jobReducer(state = jobInitialState, action: JobAction) {
  switch (action.type) {
    case JOB_TYPES.GET_JOB_STARTED: {
      return { ...state, isLoading: true };
    }

    case JOB_TYPES.GET_JOB_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        jobs: [...state.jobs, ...action.payload]
      };
    }

    case JOB_TYPES.GET_JOB_ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }

    default:
      return state;
  }
}
