// https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
    const charMeta = {};
    const uniqueChars = Array.from(new Set(getLowerCasedCharArray(word)));
    // charMeta is a meta object that tracks how many times a letter occurred in a word.
    uniqueChars.forEach(c => charMeta[c] = getCharMatchCount(c, word));
    
    return getLowerCasedCharArray(word).map(c => charMeta[c] === 1 ? '(' : ')').join('');
    
}

// Checks how many times a char appears in a string
// example input => char: 's', string: 'Snakes'
// returns 2;
function getCharMatchCount(char, string) {
  let count = 0;
  getLowerCasedCharArray(string).forEach(c => {
    if(c === char) {
      count++;
    }
  });
  return count;
}

// Returns an array of lowercased chars that make up the input string
function getLowerCasedCharArray(string) {
  return [...string].map(c => c.toLowerCase());
}