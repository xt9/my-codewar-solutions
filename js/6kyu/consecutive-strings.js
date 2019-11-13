// https://www.codewars.com/kata/consecutive-strings

function longestConsec(array, k) {
    let longest = "";
    array.forEach((str, i) => {
      // Slice the requested segment from the array, this does not break if "i + k" is higher than
      // the last index because slice only tries to slice up to the last element of the array.
      // then use join to turn it into a combined string.
      let part = array.slice(i, i + k).join('');
      // compare the part to the current longest value
      if(part.length > longest.length) {
        longest = part;
      }
    });
    
    return k < 1 || k > array.length ? "" : longest;
}