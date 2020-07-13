import { JOB_TYPES, JOB_ACTION_TYPES, JobAction, JobInterface } from './types';
import { PAGINATION_DEFAULT } from '../../constants';
import formatJobs from '../../utils/formatJob';
import API from '../../libs/api';

const inMemoryCache = new Map();

const getJobStarted = (): JobAction => ({ type: JOB_TYPES.GET_JOB_STARTED });

const getJobSuccess = (payload: JobInterface[]): JobAction => ({
  type: JOB_TYPES.GET_JOB_SUCCESS,
  payload
});

const getJobError = (error: string): JobAction => ({
  type: JOB_TYPES.GET_JOB_ERROR,
  payload: error
});

export default async function jobActions(
  dispatch: any,
  actionType: string,
  payload?: string | number
) {
  // test calling for more post
  dispatch(getJobStarted());

  switch (actionType) {
    case JOB_ACTION_TYPES.FETCH_ALL_JOBS:
      try {
        // fetch all jobs from https://remoteok.io/api
        const response = await API.get(payload ? `api/${payload}` : 'api');

        const data = (await response.json()) as JobInterface[];

        // Reset app inMemory cache for effective computing
        inMemoryCache.clear();

        const jobs = formatJobs(
          data.slice(0, PAGINATION_DEFAULT),
          inMemoryCache
        ) as JobInterface[];

        dispatch(getJobSuccess(jobs));

        inMemoryCache.set('ALL_STORED_JOBS', data);
      } catch (error) {
        dispatch(getJobError(error.message));
      }
      break;

    case JOB_ACTION_TYPES.PAGINATE_JOBS:
      // pagination variables
      const start = Number(payload) * PAGINATION_DEFAULT + 1;
      const end = start + PAGINATION_DEFAULT;

      // get all stored jobs and paginate through the data
      const ALL_STORED_JOBS = inMemoryCache.get('ALL_STORED_JOBS');

      const jobs = formatJobs(
        ALL_STORED_JOBS.slice(start, end),
        inMemoryCache
      ) as JobInterface[];

      dispatch(getJobSuccess(jobs));
      break;

    default:
      break;
  }
}
