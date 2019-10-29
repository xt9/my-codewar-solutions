// https://www.codewars.com/kata/take-a-number-and-sum-its-digits-raised-to-the-consecutive-powers-and-dot-dot-dot-eureka

function sumDigPow(a, b) {
  const eurekaNumbers = [];
  for(i = a; i <= b; i++) {
    // check each number in range for eureka numbers, using the isEurekaNumber function
    if(isEurekaNumber(i)) {
      eurekaNumbers.push(i);
    }
  }
  return eurekaNumbers;
}

function isEurekaNumber(number) {
  // Parse the digits that make up the input number
  let digits = [...number.toString()].map(n => Number(n));
  // total up the digits, using Math.pow to raise them to the power of their positions in the number.
  // then check if the input number matches the sum of the raised digits.
  return digits.reduce((total, num, i) => total + Math.pow(num, i + 1), 0) === number;
}