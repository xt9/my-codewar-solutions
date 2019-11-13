// https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
  const orders = [];
  // split by whitespace to get the words
  words.split(' ').map(word => {
    // filter characters in the word for those parseable into ints then join them together to form the final number
    let orderNumber = parseInt(
      word.split('')
        .filter(char => !isNaN(parseInt(char)))
        .join('')
    );
    orders[orderNumber] = word;
  });
  
  // Filter out the empty array indexes that may come between order values
  return orders.filter(el => el != null).join(' ');
}