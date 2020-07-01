export default function getJobPeriod(date: Date) {
  if (!date) throw new Error('Invalid date');

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
  const date = new Date(jobDate);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  );
};

const isLast7Days = (jobDate: Date) => {
  const date = new Date(jobDate);

  const time = new Date(date.toLocaleDateString()).getTime();

  const last7Days = new Date();
  const dayBeforeYesterday = new Date();

  dayBeforeYesterday.setDate(dayBeforeYesterday.getDate() - 2);
  last7Days.setDate(dayBeforeYesterday.getDate() - 7);

  const startTime = new Date(last7Days.toLocaleDateString()).getTime();
  const endTime = new Date(dayBeforeYesterday.toLocaleDateString()).getTime();

  if (startTime <= endTime) throw new RangeError('Invalid interval');

  return time >= startTime && time <= endTime;
};
