function getRandomInt(min, max) {
  if (min > 0 && max > 0) {
    if (min < max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    else {
      return 'Значение Min должно быть меньше, чем Max.';
    }
  }
  else {
    return 'Значения Min и Max могут быть только положительными.';
  }
}

getRandomInt(1, 10);

function checkStringLength(string, length) {
  return (string.length <= length);
}

checkStringLength('Проверяемая строка', 5);
