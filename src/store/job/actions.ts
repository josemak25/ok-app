import { Dispatch } from 'react';
import { DispatchTypes } from '../types';
import { JOB_TYPES, JobAction, JobInterface } from './types';

const getJobStarted = (): JobAction => ({ type: JOB_TYPES.GET_JOB_STARTED });

const getJobSuccess = (payload: JobInterface[]): JobAction => ({
  type: JOB_TYPES.GET_JOB_SUCCESS,
  payload
});

const getJobError = (error: string): JobAction => ({
  type: JOB_TYPES.GET_JOB_ERROR,
  payload: error
});

export default function jobActions() {
  return (dispatch: Dispatch<DispatchTypes>) => {
    // To unsubscribe to these update, just use the functions:
  };
}
