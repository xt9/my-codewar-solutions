// https://www.codewars.com/kata/two-to-one/

function longest(s1, s2) {
  // Spread operator will break up the input strings into their smallest iterable parts (chars)
  const mergedChars = [...s1, ...s2];
  // ES6 set only allow unique values, will discard the rest
  // Sort the unique values then join them back into a string
  return distinctSorted = [...new Set(mergedChars)].sort().join('');
}