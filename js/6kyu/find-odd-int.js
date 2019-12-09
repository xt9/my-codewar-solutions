// https://www.codewars.com/kata/find-the-odd-int

function findOdd(array) {
  for(let i = 0; i <= array.length; i++) {
    let count = getCount(array, array[i]);
    if(count % 2 === 1) {
      return array[i];
    }
  }
}

function getCount(array, n) {
  return array.reduce((total, i) => {
    if(i === n) {
      return total + 1;
    } else {
      return total;
    } 
  }, 0);
}