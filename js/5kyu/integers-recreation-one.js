// https://www.codewars.com/kata/55aa075506463dac6600010d

function listSquared(m, n) {
  // should probably have been named pairsOfSquaredDivisorSums
  let pairsOfSquaredDivisorSumsOmgWhatIsThisVariableNameThisIsHighlyQuestionable = [];
  for(let i = m; i <= n; ++i) {
    let divisors = getDivisors(i);
    let squaredDivisorsSum = divisors.reduce((total, number) => total + Math.pow(number, 2), 0);
    // if the divisors squared sum is also a square, add the number to our list
    if(isSquare(squaredDivisorsSum)) {
      pairsOfSquaredDivisorSumsOmgWhatIsThisVariableNameThisIsHighlyQuestionable.push([i, squaredDivisorsSum]);
    }
  }
  return pairsOfSquaredDivisorSumsOmgWhatIsThisVariableNameThisIsHighlyQuestionable;
}

// return an array of numbers that can divide the input number
function getDivisors(number) {
  let divisors = [];
  for(let i = 1; i <= number; i++) {
    if(number % i == 0) {
      divisors.push(i);
    }
  }
  return divisors;
}

// check if the number is a square
function isSquare(number) {
  return Math.sqrt(number) % 1 === 0;
}