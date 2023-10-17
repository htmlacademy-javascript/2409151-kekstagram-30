/* Функция для проверки длины строки.
Если строка, которую передали в функцию (первый параметр - str) меньше или равна указанной длине (второй параметр - maxLength),
то функция вернёт true. Если строка длиннее, то функция вернёт false.
*/
const checkLengthString = function (str, maxLength) {
  if (str.length <= maxLength) {
    return true;
  }
  return false;
};

// eslint-disable-next-line
console.log(checkLengthString('Строка для проверки', 20));
// eslint-disable-next-line
console.log(checkLengthString('Строка для проверки', 19));
// eslint-disable-next-line
console.log(checkLengthString('Строка для проверки', 10));
