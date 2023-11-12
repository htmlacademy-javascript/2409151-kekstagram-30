import { getRandomInteger } from './utils.js';

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

const POST_ID_COUNTER = 25;
const COMMENT_COUNTER = 30;
const COMMENT_ID_COUNTER = 3333;

/*Создаём массив целых последовательных чисел для генерации id поста. Далее, функцией getRandomInteger(), извлекаем
  из него случайным образом числа.
*/
const postIds = [];
for (let i = 1; i <= POST_ID_COUNTER; i++) {
  postIds.push(i);
}

/*Создаём массив целых последовательных чисел для генерации id комментария. Далее, функцией getRandomInteger(), извлекаем
  из него случайным образом числа.
*/
const commentIds = [];
for (let i = 1; i <= COMMENT_ID_COUNTER; i++) {
  commentIds.push(i);
}

const getDescriptionPhotos = () => (
  DESCRIPTION_PHOTOS[getRandomInteger(0, DESCRIPTION_PHOTOS.length - 1)]
);

const getMessage = () => (
  MESSAGE[getRandomInteger(0, MESSAGE.length - 1)]
);

const getName = () => (
  NAMES[getRandomInteger(0, NAMES.length - 1)]
);

//функция создаёт один объект с комментариями
const getComment = () => {
  const index = getRandomInteger(0, commentIds.length - 1);
  const commentId = commentIds[index];
  commentIds.splice(index, 1);
  return {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getMessage(),
    name: getName()
  };
};

//Функция createTemporaryData создаёт один объект
const createTemporaryData = () => {
  const index = getRandomInteger(0, postIds.length - 1);
  const id = postIds[index];
  const url = postIds[index];
  postIds.splice(index, 1);
  return {
    id: id,
    url: `photos/'${url}.jpg`,
    description: getDescriptionPhotos(),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, COMMENT_COUNTER)}, getComment)
  };
};

const createArrayOfPosts = () => Array.from({length: POST_ID_COUNTER}, createTemporaryData);

export {createArrayOfPosts};
