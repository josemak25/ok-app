//@ts-ignore
import * as Feed from 'react-native-rss-parser';
import { JOB_TYPES, JOB_ACTION_TYPES, JobAction, JobInterface } from './types';
import API from '../../libs/api';

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
  payload: any = null
) {
  // test calling for more post
  dispatch(getJobStarted());

  switch (actionType) {
    case JOB_ACTION_TYPES.FETCH_ALL_JOBS:
      try {
        // make network request here

        // fetch all jobs from https://remoteok.io/api
        const response = await API.get('api');

        // fetch all jobs from https://remoteok.io/remote-jobs.rss
        const rssResponse = await API.get('remote-jobs.rss');

        const rssData = await rssResponse.text();

        const rssFeeds = await Feed.parse(rssData);

        const data = (await response.json()) as JobInterface[];

        const [, ...jobs] = data;

        dispatch(getJobSuccess(jobs));
      } catch (error) {
        dispatch(getJobError(error.message));
      }
      break;

    default:
      break;
  }
}
