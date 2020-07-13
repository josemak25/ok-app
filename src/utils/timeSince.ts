export default (date: Date) => {
  const timestamp = new Date(date);

  if (isNaN(timestamp.getTime())) {
    throw new Error("Invalid timestamp passed to 'since()'");
  }

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const month = 30 * day;
  const year = 12 * month;

  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - timestamp.getTime();

  switch (true) {
    case Math.floor(timeDifference / year) > 1:
      return `${Math.floor(timeDifference / year)}y`;

    case Math.floor(timeDifference / month) > 1:
      return `${Math.floor(timeDifference / month)}m`;

    case Math.floor(timeDifference / hour) > 1:
      if (Math.floor(timeDifference / hour) > 24) {
        return `${Math.floor(timeDifference / hour / 24)}d`;
      }

      return `${Math.floor(timeDifference / hour)}h`;

    case Math.floor(timeDifference / minute) > 1:
      if (Math.floor(timeDifference / minute) > 60) {
        return `${Math.floor(timeDifference / minute / 60)}h`;
      }

      return `${Math.floor(timeDifference / minute)}m`;

    default:
      return `just now`;
  }
};
