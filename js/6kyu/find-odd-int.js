// https://www.codewars.com/kata/find-the-odd-int

function findOdd(array) {
  return array.find(n => {
    let count = getCount(array, n);
    return count % 2 === 1;
  });
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