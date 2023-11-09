import {getDescriptionPhotos, getMessage, getName} from './data.js';

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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

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

const ArrayOfObject = () => Array.from({length: POST_ID_COUNTER}, createTemporaryData);

export { ArrayOfObject, getRandomInteger };
