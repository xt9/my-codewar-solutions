// https://www.codewars.com/kata/does-my-number-look-big-in-this

function narcissistic(value) {
  const numbers = getIntegerParts(value);
  let sum = 0;
  // pass our own accumulator to reduce so it starts at index 0
  const result = numbers.reduce((total, number) => {
    // raise the numbers to the power of how many digits it has.
    return total + Math.pow(number, numbers.length);
  }, sum);
  return result === value;
}

function getIntegerParts(number) {
  return number.toString().split('').map(Number)
}