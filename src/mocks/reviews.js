import { nanoid } from 'nanoid';

const userReviews = [
  {
    id: nanoid(),
    userName: 'Борис Иванов',
    dignity: 'мощность, внешний вид',
    limitations: 'Слабые тормозные колодки (пришлось заменить)',
    comment: `Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым
  характеристикам. Не думал, что пересяду на китайский автопром,
  но сейчас гоняю и понимаю, что полностью доволен.`,
    ratingValue: 3,
    reviewTimestamp: Date.now(),
  },
  {
    id: nanoid(),
    userName: 'Марсель Исмагилов',
    dignity: 'Cтиль, комфорт, управляемость',
    limitations: 'Дорогой ремонт и обслуживание',
    comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    ratingValue: 3,
    reviewTimestamp: Date.now(),
  },
];

export default userReviews;
