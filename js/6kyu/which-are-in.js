// https://www.codewars.com/kata/which-are-in

function inArray(a1, a2){
  // Filter through a1 for words in a2 that contains the wordPart of current iteration
  let results = a1.filter(wordPart => {
    let foundMatch = false;
    a2.forEach(word => {
      if(word.includes(wordPart)) {
        foundMatch = true;
      }
    });
    return foundMatch;
  });
  // Return array with no duplicates, sorted
  return [...new Set(results)].sort();
}