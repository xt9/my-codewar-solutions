// https://www.codewars.com/kata/54e6533c92449cc251001667

var uniqueInOrder = function(string) {
  let chars = [...string];
  for(let i = chars.length - 1; i >= 0; i--) {
    // if the adjacent character is the same as the current array element
    // we remove the current element
    if(chars[i-1] === chars[i]) {
      chars[i] = null;
    }
  }
  // filter the array to only include elements with values
  return chars.filter(el => el);
}