// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string){
  // break down the input string into characters
  // Then lowercase them using map
  // Then filter out any non alphabetical characters like whitespace or punctuation/commas.
  const letters = [...string].map(s => s.toLowerCase()).filter(s => s.match(/[a-z]/i));
  // Weed out duplicates then check if we've used all of the characters in an english alphabet.
  return [...new Set(letters)].length == 26;
}