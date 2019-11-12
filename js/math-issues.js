// https://www.codewars.com/kata/5267faf57526ea542e0007fb

Math.round = function (number) {
  // To fixed automatically rounds, but converts the number to a string
  // Wrap it in number to convert back to a number
  return Number(number.toFixed(0));
};

Math.ceil = function (number) {
  // if the number has a decimal remainder we need to round this up
  return number % 1 > 0 ? Math.floor(number) + 1 : Math.floor(number);
};

Math.floor = function (number) {
  // remove the fractional with a bitwise operator, since we cant use Math.truncate()
  return Number(number | 0);
};