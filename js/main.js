function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 10);

function checkStringLength(string, length) {
  return (string.length === length);
}

checkStringLength('Проверяемая строка', 5);
