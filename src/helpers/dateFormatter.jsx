export default function bespokeDateFormat(date) {
  const formatNumber = (num) => {
    if (num.length === 1) {
      return `0${num}`;
    }
    return num;
  };
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Weds', 'Thur', 'Fri', 'Sat'];

  return {
    hour: formatNumber(date.getHours()),
    min: formatNumber(date.getMinutes()),
    month: months[date.getMonth()],
    dayofMonth: date.getDate(),
    day: days[date.getDay()],
  };
}
