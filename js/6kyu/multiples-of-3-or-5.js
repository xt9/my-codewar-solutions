// https://www.codewars.com/kata/multiples-of-3-or-5

function solution(number) {
  // Get the numbers that are divisible by 3 and 5 below the input number
  // Spread the results in an es6 set to remove duplicates then reduce into a sum
  let results = Array.from(new Set([
    ...getDivisiblesOf(number, 3), 
    ...getDivisiblesOf(number, 5)
  ]));
  return results.length == 0 ? 0 : results.reduce((total, number) => total + number);
}

function getDivisiblesOf(number, multiple) {
  let divisibles = [];
  for(i = 1; i < number; i++) {
    if(i % multiple == 0) {
      divisibles.push(i);
    }
  }
  return divisibles;
}