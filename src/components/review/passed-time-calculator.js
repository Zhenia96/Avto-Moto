import dayjs from 'dayjs';

const REGULAR_EXPRESSION_FOR_FIRST_NAMES = /1|[2-9][0-9]$/;
const REGULAR_EXPRESSION_FOR_SECOND_NAMES = /[2-4]|2[2-4]$/;

const yearNamespace = ['год', 'года', 'лет'];
const monthNamespace = ['месяц', 'месяца', 'месяцев'];
const weekNamespace = ['неделю', 'недели', 'недель'];
const dayNamespace = ['день', 'дня', 'дней'];
const hourNamespace = ['час', 'часа', 'часов'];
const minuteNamespace = ['минуту', 'минуты', 'минут'];
const secondNamespace = ['секунду', 'секунды', 'секунд'];

const getUnitName = (time, namespace) => {
  const timeAsString = String(time);

  if (REGULAR_EXPRESSION_FOR_FIRST_NAMES.test(timeAsString)) {
    return namespace[0]
  }
  if (REGULAR_EXPRESSION_FOR_SECOND_NAMES.test(timeAsString)) {
    return namespace[1]
  }
  else {
    return namespace[2]
  }
}

function getPassedTime(reviewTimestamp) {
  const currerntTime = dayjs();
  const reviewTime = dayjs(reviewTimestamp);
  let time;
  let unitName;

  if ((currerntTime.$y - reviewTime.$y) > 0) {
    time = (currerntTime.$y - reviewTime.$y);
    unitName = getUnitName(time, yearNamespace);
  }
  if ((currerntTime.$M - reviewTime.$M) > 0) {
    time = (currerntTime.$M - reviewTime.$M);
    unitName = getUnitName(time, monthNamespace);
  }
  if ((currerntTime.$W - reviewTime.$W) > 0) {
    time = (currerntTime.$W - reviewTime.$W);
    unitName = getUnitName(time, weekNamespace);
  }
  if ((currerntTime.$D - reviewTime.$D) > 0) {
    time = (currerntTime.$D - reviewTime.$D);
    unitName = getUnitName(time, dayNamespace);
  }
  if ((currerntTime.$H - reviewTime.$H) > 0) {
    time = (currerntTime.$H - reviewTime.$H);
    unitName = getUnitName(time, hourNamespace);
  }
  if ((currerntTime.$m - reviewTime.$m) > 0) {
    time = (currerntTime.$m - reviewTime.$m);
    unitName = getUnitName(time, minuteNamespace);
  } else {
    time = (currerntTime.$s - reviewTime.$s);
    unitName = getUnitName(time, secondNamespace);
  }

  return `${time} ${unitName} назад`;
}

export {
  getPassedTime
}