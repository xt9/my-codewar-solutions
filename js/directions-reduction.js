// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(array) {
  // since we are removing elements from the array we want to start at the end.
  for(i = array.length - 1; i >= 0; i--) {
    if((array[i] == 'NORTH' && array[i-1] === 'SOUTH') ||
       (array[i] == 'SOUTH' && array[i-1] === 'NORTH') ||
       (array[i] == 'WEST' && array[i-1] === 'EAST') ||
       (array[i] == 'EAST' && array[i-1] === 'WEST')) {
      // remove this element and the neighbouring element if their directions cancel eachother out.
      array.splice(i, 1);
      array.splice(i-1, 1);
    }
  }
  return array;
}