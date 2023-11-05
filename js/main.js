const DESCRIPTION_PHOTOS = ['Москва', 'Санкт-Петербург', 'Казань', 'Волгоград', 'Екатеринбург', 'Сочи', 'Карелия', 'Байкал',
  'Камчатка', 'Алтай', 'Крым', 'Севастополь', 'Новосибирск', 'Иркутск', 'Владивосток', 'Московский Кремль', 'Эрмитаж', 'Петродворец',
  'Дальневосточный океанариум', 'Архыз', 'Урал', 'Калиниград', 'Кипр', 'Анталья', 'Хургада', 'Омск'];

const MESSAGE = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Кирилл', 'Александр', 'Ольга', 'Олег', 'Антон', 'Елена', 'Алексей', 'Анатолий', 'Николай', 'Ирина',
  'Владимир', 'Сергей', 'Марина', 'Константин', 'Дмитрий', 'Иван', 'Максим', 'Руслан', 'Андрей', 'Евгений', 'Виктор',
  'Снежана', 'Мария', 'Валентина', 'Светлана'];

const OBJECT_ARRAY_COUNTER = 25;

const arrayOfIds = [];
/*Создаём массив целых последовательных чисел. Далее, функцией getRandomInteger(), извлекаем
из него случайным образом числа.
*/
for (let i = 1; i <= OBJECT_ARRAY_COUNTER; i++) {
  arrayOfIds.push(i);
}

/* функцию получения случайного числа я честно взял из: "Учебный проект: нас - орда". Здесь сам ничего не придумывал.
Если такой вариант не проходит, ну тогда буду пытаться изобретать свой велосипед*/
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция createTemporaryData создаёт один объект
const createTemporaryData = () => {
  const index = getRandomInteger(0, arrayOfIds.length - 1);
  const id = arrayOfIds[index];
  const url = arrayOfIds[index];
  const commentId = arrayOfIds[index];
  arrayOfIds.splice(index, 1);
  return {
    id: id,
    url: `photos/'${url}.jpg`,
    description: DESCRIPTION_PHOTOS[getRandomInteger(0, DESCRIPTION_PHOTOS.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: [{
      id: commentId,
      avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
      message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
      name: NAMES[getRandomInteger(0, NAMES.length - 1)],
    }]
  };
};

//Метод создаёт массив объектов, длина которого задана константой OBJECT_ARRAY_COUNTER
console.log(Array.from({length: OBJECT_ARRAY_COUNTER}, createTemporaryData));
