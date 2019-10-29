// https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/

function encrypt(text, n) {
  if(text === null || text === "" || n <= 0) {
    return text;
  }
  // Categorize the charachters by their index in a string
  const oddChars = evenOddSorter([...text], false);
  const evenChars = evenOddSorter([...text], true);
  const newText = oddChars.join('') + evenChars.join('')
  return encrypt(newText, n - 1)
}

function decrypt(encryptedText, n) {
  if(encryptedText === null || encryptedText === "" || n <= 0) {
    return encryptedText;
  }
  // Get the middle index, rounding down
  const middleIndex = Math.floor(encryptedText.length / 2);
  // Select odd chars from the first half of the encrypted string
  const oddChars = [...encryptedText].slice(0, middleIndex);
  // Select even chars from the middle index to the end of the string
  const evenChars = [...encryptedText].slice(middleIndex, encryptedText.length);
  
  // on even indexes shift a character from evenChars, if odd shift from oddChars
  // Then use join to put it back into a string
  let result = [...encryptedText].map((t, i) => i % 2 == 0 ? evenChars.shift() : oddChars.shift()).join('');
  return decrypt(result, n - 1);
}

function evenOddSorter(array, isEven) {
  return array.filter((c, i) => isEven ? i % 2 == 0 : i % 2 != 0);
}