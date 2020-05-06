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

  const hour = formatNumber(date.getHours());
  const min = formatNumber(date.getMinutes());
  const month = months[date.getMonth()];
  const dayofMonth = date.getDate();

  return `${hour}:${min} ${month} ${dayofMonth}`;
}
