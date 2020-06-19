import { JOB_TYPES, JOB_ACTION_TYPES, JobAction, JobInterface } from './types';
import API from '../../libs/api';
import getJobPeriod from '../../utils/getJobPeriod';
import generateColor from '../../utils/generateColor';

const getJobStarted = (): JobAction => ({ type: JOB_TYPES.GET_JOB_STARTED });

const getJobSuccess = (
  payload: { title: string; data: JobInterface[] }[]
): JobAction => ({
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
  payload: any = null
) {
  // test calling for more post
  dispatch(getJobStarted());

  switch (actionType) {
    case JOB_ACTION_TYPES.FETCH_ALL_JOBS:
      try {
        // fetch all jobs from https://remoteok.io/api
        const response = await API.get('api');

        const data = (await response.json()) as JobInterface[];

        const jobs = data.reduce<{ title: string; data: JobInterface[] }[]>(
          (acc, job) => {
            const [
              todaySection,
              yesterdaySection,
              last7DaysSection,
              Last30DaysSection
            ] = acc;

            const { date, tags } = job;

            if (!date) return acc;

            if (tags.length) {
              // @ts-ignore
              job.tags = tags.map((name) => ({ name, color: generateColor() }));
            }

            const section = getJobPeriod(date);

            if (section === todaySection.title) {
              todaySection.data.push(job);
            }

            if (section === yesterdaySection.title) {
              yesterdaySection.data.push(job);
            }

            if (section === last7DaysSection.title) {
              last7DaysSection.data.push(job);
            }

            if (section === Last30DaysSection.title) {
              Last30DaysSection.data.push(job);
            }

            acc = [
              ...acc,
              todaySection,
              yesterdaySection,
              last7DaysSection,
              Last30DaysSection
            ];

            return acc;
          },
          [
            {
              title: 'Today',
              data: []
            },
            {
              title: 'Yesterday',
              data: []
            },
            {
              title: 'Last 7 days',
              data: []
            },
            {
              title: 'Last 30 days',
              data: []
            }
          ]
        );

        dispatch(getJobSuccess(jobs));
      } catch (error) {
        dispatch(getJobError(error.message));
      }
      break;

    default:
      break;
  }
}
