/* Функция для проверки длины строки.
Если строка, которую передали в функцию (первый параметр - str) меньше или равна указанной длине (второй параметр - maxLength),
то функция вернёт true. Если строка длиннее, то функция вернёт false.
*/
const checkLengthString = (str, maxLength) => {
  if (str.length <= maxLength) {
    return true;
  }
  return false;
};

//const checkLengthString = (str, maxLength) => str.length <= maxLength;

checkLengthString('Строка для проверки', 20);

checkLengthString('Строка для проверки', 19);

checkLengthString('Строка для проверки', 10);

/* Функция проверки является ли слово или фраза палиндромом(читается одинаково как с начала так и с конца).
Если слово или фраза, которую передали в функцию (str) является палиндромом,
то функция вернёт true. В противном случае функция вернёт false.
*/
const checkStringIsPalindrom = (str) => {
  const string = str.replaceAll(' ', '').toLowerCase();
  let newString = '';
  for (let i = string.length - 1; i >= 0; i --) {
    newString += string[i];
  }
  return newString === string;
};

checkStringIsPalindrom('Т о п о p');
checkStringIsPalindrom('Т о п о т');
checkStringIsPalindrom('Лёша на полке клопа нашёл');
checkStringIsPalindrom('Кучук');
checkStringIsPalindrom('ДОВОД');
checkStringIsPalindrom('Повод');

/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
 Если в строке нет ни одной цифры, функция должна вернуть NaN
*/
const convertStringToNumber = (str) => {
  let result = '';
  for (let i = 0; i < str.length; i ++) {
    if (!Number.isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }
  return parseInt(result, 10);
};

convertStringToNumber ('2023');
convertStringToNumber ('ECMAScript 2022');
convertStringToNumber ('агент 007');
convertStringToNumber ('1 кефир, 0.5 батона');
convertStringToNumber ('а я томат');
