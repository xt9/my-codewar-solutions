// https://www.codewars.com/kata/title-case

function titleCase(title, minorWords = null) {
  // split the lowercased words into an array.
  let words = title.toLowerCase().split(' ');
  
  return words.map((word, i) => {
    // If it's the first word in a sentence or not a minor word it should be title cased.
    // If its a minor word and not the first word it should be lowercased.
    return i === 0 || !isMinorWordMatch(word, minorWords) ? wordToTitleCase(word) : word.toLowerCase();
  }).join(' ');
}

function wordToTitleCase(word) {
  // return the word with the first letter capitalized and the rest of the letters lowercased.
  return [...word].map((char, i) => i === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
}

function isMinorWordMatch(word, minorWords) {
  if(minorWords === null || minorWords.length === 0) {
    return false;
  }
  // if word is found in minorWords, its a match
  return minorWords.toLowerCase().split(' ').includes(word);
}