//@ts-ignore
import TimeAgo from 'javascript-time-ago';

// Load locale-specific relative date/time formatting rules.
// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(require('javascript-time-ago/locale/en'));

// Create relative date/time formatter.
const timeAgo = new TimeAgo('en-US');

const formattedTime = (date: Date): Date => {
  return timeAgo.format(new Date(date));
};

export default formattedTime;
