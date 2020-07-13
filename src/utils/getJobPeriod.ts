import timeSince from './timeSince';

const withInYesterday = { '1d': '1d', '2d': '2d' } as { [key: string]: string };

const withIn7Days = ['3d', '4d', '5d', '6d', '7d', '8d'].reduce<{
  [key: string]: string;
}>((acc, date: string) => {
  acc[date] = date;
  return acc;
}, {});

export default function getJobPeriod(date: Date) {
  if (!Date.parse(String(date))) throw new Error('Invalid date');

  if (isToday(date)) return `Today`;
  if (isYesterday(date)) return `Yesterday`;
  if (isLast7Days(date)) return `Last 7 days`;

  return `Last 30 days`;
}

const isToday = (jobDate: Date) => {
  const today = new Date();
  const date = new Date(jobDate);

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const isYesterday = (jobDate: Date) => {
  const date = timeSince(jobDate);
  if (withInYesterday[date]) return true;
};

const isLast7Days = (jobDate: Date) => {
  const date = timeSince(jobDate);
  if (withIn7Days[date]) return true;
};
