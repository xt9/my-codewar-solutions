// https://www.codewars.com/kata/52597aa56021e91c93000cb0

var moveZeros = function (array) {
  // First group by zeroes and non-zeroes, then put the zero elements last
  return [
    ...array.filter(el => el !== 0), 
    ...array.filter(el => el === 0)
  ];
}