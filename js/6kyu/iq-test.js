// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers) {
  // Parse the input value into an array of integers
  const numbersArray = numbers.split(" ").map(n => parseInt(n, 10));
  // Categorize the numbers into even and odd, while maintaining index.
  const evenNumbers = evenOddSorter(numbersArray, true);
  const oddNumbers = evenOddSorter(numbersArray, false);
  
  // Assume that if the evenNumbers only have 1 element it is the outlier, if not assume that the outlier 
  // is an odd number.
  return evenNumbers.length == 1 ? evenNumbers[0].index : oddNumbers[0].index;
}

function evenOddSorter(array, isEven) {
  // map the numbers to a value index pair where index is corrected to the constraints of this kata.
  // then filter out the even numbers using modulus
  return array.map((val, index) => {
    return { val, index: index + 1 }
  }).filter(n => isEven ? n.val % 2 == 0 : n.val % 2 != 0);
}