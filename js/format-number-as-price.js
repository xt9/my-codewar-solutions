// https://www.codewars.com/kata/5318f00b31b30925fd0001f8

var numberToPrice = function(number) {
  let decimals = Math.abs(number % 1);
  decimals = Number(decimals.toFixed(3));
  
  if(isNaN(Number(number)) || typeof number === 'string') {
    return 'NaN';
  }
  number = number | 0;

  let numbers = number.toFixed(0).split('');
  let prepend = '';
  if(numbers[0] === '-') {
    prepend = numbers.shift();
  }
  let formatted = [];
  
  let num = 0;
  for(let i = numbers.length - 1; i >= 0; i--) {
    formatted.push(numbers[i]);
    num++;
    if(num === 3 && i != 0) {
      formatted.push(',');
      num = 0;
    }
  }
  formatted = formatted.reverse().join('');
  
  
  return prepend + formatted + '.' + formatDecimals(decimals + '', 2);
}

function formatDecimals(decimals, num) {
  let str = '';
  let added = 0;
  let dcs = [...decimals];
  dcs.shift();
  dcs.shift();
  
  for(let i = 0; i < num; i++) {
    if(dcs[i]) {
      str += dcs[i];
    } else {
      str += 0;
    }
    added++;
  };
  return str;
}