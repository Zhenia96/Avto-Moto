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
    return namespace[0];
  }
  if (REGULAR_EXPRESSION_FOR_SECOND_NAMES.test(timeAsString)) {
    return namespace[1];
  }

  return namespace[2];
};

function getPassedTime(reviewTimestamp) {
  const currentTime = dayjs();
  const reviewTime = dayjs(reviewTimestamp);
  let time;
  let unitName;

  if ((currentTime.$y - reviewTime.$y) > 0) {
    time = (currentTime.$y - reviewTime.$y);
    unitName = getUnitName(time, yearNamespace);
  }
  if ((currentTime.$M - reviewTime.$M) > 0) {
    time = (currentTime.$M - reviewTime.$M);
    unitName = getUnitName(time, monthNamespace);
  }
  if ((currentTime.$W - reviewTime.$W) > 0) {
    time = (currentTime.$W - reviewTime.$W);
    unitName = getUnitName(time, weekNamespace);
  }
  if ((currentTime.$D - reviewTime.$D) > 0) {
    time = (currentTime.$D - reviewTime.$D);
    unitName = getUnitName(time, dayNamespace);
  }
  if ((currentTime.$H - reviewTime.$H) > 0) {
    time = (currentTime.$H - reviewTime.$H);
    unitName = getUnitName(time, hourNamespace);
  }
  if ((currentTime.$m - reviewTime.$m) > 0) {
    time = (currentTime.$m - reviewTime.$m);
    unitName = getUnitName(time, minuteNamespace);
  } else {
    time = (currentTime.$s - reviewTime.$s);
    unitName = getUnitName(time, secondNamespace);
  }

  return `${time} ${unitName} назад`;
}

export default getPassedTime;
