import API from '../../libs/api';
import getJobPeriod from '../../utils/getJobPeriod';
import generateColor from '../../utils/generateColor';
import {
  JOB_TYPES,
  JOB_ACTION_TYPES,
  JobAction,
  JobInterface,
  JobType
} from './types';

const getJobStarted = (): JobAction => ({ type: JOB_TYPES.GET_JOB_STARTED });

const getJobSuccess = (payload: JobType[]): JobAction => ({
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
  payload?: string
) {
  // test calling for more post
  dispatch(getJobStarted());

  switch (actionType) {
    case JOB_ACTION_TYPES.FETCH_ALL_JOBS:
      try {
        // fetch all jobs from https://remoteok.io/api
        const response = await API.get(payload ? `api/${payload}` : 'api');

        const data = (await response.json()) as JobInterface[];

        const sectionMap = new Map();

        data.forEach((job) => {
          const { date, tags } = job;

          if (!date) return;

          if (tags.length) {
            const colors = generateColor(tags.length);
            // @ts-ignore
            job.tags = tags.map((name, index) => ({
              name,
              color: colors[index]
            }));
          }

          const section = getJobPeriod(date);

          if (sectionMap.has(section)) {
            const existingSection = sectionMap.get(section) as JobType;
            existingSection.data.push(job);
          } else {
            sectionMap.set(section, {
              title: section,
              data: [job]
            });
          }
        });

        const jobs = Array.from(sectionMap.values()) as JobType[];

        dispatch(getJobSuccess(jobs));
      } catch (error) {
        dispatch(getJobError(error.message));
      }
      break;

    default:
      break;
  }
}
