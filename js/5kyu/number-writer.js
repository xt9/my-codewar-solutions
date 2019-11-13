// https://www.codewars.com/kata/52724507b149fa120600031d

// input example 1233
// returns "one thousand two hundred thirty-three"
function number2words(n) {
  return getNumber(n);
}

function getNumber(n) {
  if(0 <= n && n <= 9) {
    return getSingle(n);
  } else if(n <= 19) {
    return getTeen(n);
  } else if(n <= 99) {
    return getTens(n);
  } else if(n <= 999) {
    return getHundreds(n);
  } else if(n <= 999999) {
    return getThousands(n);
  } 
}

function getThousands(n) {
  let digits = [...n + ''];
  // -3 instead of -4 because slice does not include the end index.
  let thousands = Number(digits.slice(0, digits.length - 3).join(''));
  let rest = Number(digits[digits.length - 3] + digits[digits.length - 2] + digits[digits.length - 1]);
  let append = getNumber(rest);
  
  return getNumber(thousands) + ' thousand' + (append !== 'zero' ? ' ' + append : '');
}


function getHundreds(n) {
  let digits = [...n + ''];
  let hundredsPlace = Number(digits[digits.length - 3]);
  let rest = Number(digits[digits.length - 2] + digits[digits.length - 1]);
  let append = getNumber(rest);
  
  return getNumber(hundredsPlace) + ' hundred' + (append !== 'zero' ? ' ' + append : '');
}

function getTens(n) {
  let digits = [...n + ''];
  let tensPlace = Number(digits[digits.length - 2]);
  let singlesPlace = Number(digits[digits.length - 1]);
  let append = singlesPlace > 0 ? '-' + getSingle(singlesPlace) : '';
  // special cases where we can't follow the usual pattern of number + ty
  // for example 2 + ty => twoty (which doesn't sound that great)
  switch(tensPlace) {
    case 2: return 'twenty' + append;
    case 3: return 'thirty' + append;
    case 4: return 'forty' + append;
    case 5: return 'fifty' + append;
    case 8: return 'eighty' + append;
    default: return getNumber(tensPlace) + 'ty' + append;
  }
}

function getTeen(n) {
  let digits = [...n + ''];
  let singlesPlace = Number(digits[digits.length - 1]);
  // special cases where we can't follow the usual pattern of number + teen
  // for example 1 + teen => oneteen (which doesn't sound that great)
  switch(n) {
    case 10: return 'ten';
    case 11: return 'eleven';
    case 12: return 'twelve';
    case 13: return 'thirteen';
    case 15: return 'fifteen';
    case 18: return 'eighteen';
    default: return getNumber(singlesPlace) + 'teen';
  }
}

function getSingle(n) {
  switch(n) {
    case 0: return 'zero';
    case 1: return 'one';
    case 2: return 'two';
    case 3: return 'three';
    case 4: return 'four';
    case 5: return 'five';
    case 6: return 'six';
    case 7: return 'seven';
    case 8: return 'eight';
    case 9: return 'nine';
  }
}