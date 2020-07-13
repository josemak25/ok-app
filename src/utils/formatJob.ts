import { JobInterface } from '../store/job/types';
import generateColor from './generateColor';
import getJobPeriod from './getJobPeriod';
import timeSince from './timeSince';

const formatJobTags = (tags: { name: string; color: string }[]) => {
  const colors = generateColor(tags.length);
  return tags.map((name, index) => ({ name, color: colors[index] }));
};

const formatJobs = (jobs: JobInterface[], inMemoryCache: Map<any, any>) => {
  const [_, ...formattedJobs] = jobs.map((job) => {
    const { date, tags } = job;

    if (!date) return;

    // @ts-ignore
    if (tags.length) job.tags = formatJobTags(tags);

    const section = getJobPeriod(date);

    //@ts-ignore
    job.date = timeSince(date);

    if (!inMemoryCache.has(section)) {
      inMemoryCache.set(section, section);
      job.section = section;
    }

    return job;
  });

  return formattedJobs;
};

export default formatJobs;
