// https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(number) {
  let digits = getIntegerParts(number);
  
  // For each iteration, calculate the sum of the digits
  // Keep running until we get a number that only has one digit.
  while(digits.length > 1) {
    let sum = digits.reduce((sum, n) => sum + n);
    digits = getIntegerParts(sum);
  }
  return digits[0];
}

// Splits a number into its digits
// if number = 10, returns [1, 0]
// if number = 237, returns [2, 3, 7]
function getIntegerParts(number) {
  return number.toString().split('').map(Number)
}