// https://www.codewars.com/kata/string-incrementer

function incrementString (str) {
  const digits = [...str].map(c => parseInt(c)).filter(n => !isNaN(n));
  let sum = digits.length == 0 ? 0 : parseInt(digits.join(''));
  sum++;
  // Return the word and the zero padded number
  return [...str].filter(s => s.match(/[a-z]/i)).join('') + lengthPadding(sum, digits.length);
}

function lengthPadding(number, targetLength, padder = "0") {
  number = number + ''
  // While the string does not have the expected length to match the input number we pad it
  // until it has the correct length
  while (number.length < targetLength) {
    number = padder + number;
  }
  return number;
}