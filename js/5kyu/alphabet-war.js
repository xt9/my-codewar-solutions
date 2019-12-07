// https://www.codewars.com/kata/59473c0a952ac9b463000064

let opposites = {
  w: 'm',
  p: 'q',
  b: 'd',
  s: 'z',
  m: 'w',
  q: 'p',
  d: 'b',
  z: 's'
};

function alphabetWar(string)
{
    let charArray = [...string];
    
    // handle priest conversions before counting points
    charArray = priestStuff(charArray);
    
    let scores = getScores(charArray);
    
    if(scores.left > scores.right) {
      return 'Left side wins!';
    } else if(scores.right > scores.left) {
      return 'Right side wins!';
    } else {
      return 'Let\'s fight again!';
    }
}

function priestStuff(chars) {
  let rightConvertables = ['m', 'q', 'd', 'z'];
  let leftConvertables = ['w', 'p', 'b', 's'];
    
  for(let i = 0; i < chars.length; i++) {
    canConvertNeighbour(chars, i, 't', 'j', rightConvertables);
    canConvertNeighbour(chars, i, 'j', 't', leftConvertables);
  }
  
  return chars;
}

function canConvertNeighbour(chars, i, priest, enemyPriest, convertables) {
    if(chars[i] === priest) {
      if(convertables.includes(chars[i-1])) {
        // if the char we're trying to convert is sandwiched between us and another priest
        // we cant convert them
        if(chars[i-2] !== enemyPriest) {
          chars[i-1] = opposites[chars[i-1]];
        }
      }
      if(convertables.includes(chars[i+1])) {
        if(chars[i+2] !== enemyPriest) {
          chars[i+1] = opposites[chars[i+1]];
        }
      }
    }
}


function getScores(chars) {
  let leftTroops = new Map([['w', 4], ['p', 3], ['b', 2] , ['s', 1]]);
  let rightTroops = new Map([['m', 4], ['q', 3], ['d', 2] , ['z', 1]]);
  
  let left = 0;
  let right = 0;
  
  chars.forEach(c => {
    if(leftTroops.get(c) !== undefined) {
      left += leftTroops.get(c);
    } else if(rightTroops.get(c) !== undefined) {
      right += rightTroops.get(c);
    }
  });
  
  return { left, right };
}

function getScores(chars) {
  let leftTroops = new Map([['w', 4], ['p', 3], ['b', 2] , ['s', 1]]);
  let rightTroops = new Map([['m', 4], ['q', 3], ['d', 2] , ['z', 1]]);
  
  let left = 0;
  let right = 0;
  
  chars.forEach(c => {
    if(leftTroops.get(c) !== undefined) {
      left += leftTroops.get(c);
    } else if(rightTroops.get(c) !== undefined) {
      right += rightTroops.get(c);
    }
  });
  
  return { left, right };
}