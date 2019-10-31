// https://www.codewars.com/kata/54a2e93b22d236498400134b

function presses(phrase) {
  // make sure to give the reduce function's total an initial value so it does not try
  // to turn a character into a number. (for example if input phrase was: LOL total would be initialized as
  // L here, so we set reduces 2nd param to 0 so it won't use concat.
  return [...phrase].reduce((total, char) => {
    return total + getKeyPressCount(char);
  }, 0);
}

// input: C, result: 3
// input: S, result 4
function getKeyPressCount(char) {
  let pressMeta = ["1", "ABC2", "DEF3", "GHI4", "JKL5", "MNO6", "PQRS7", "TUV8", "WXYZ9", "*", " 0", "#"];
  let result = 0;
  pressMeta.forEach(keyset => {
    [...keyset].forEach((c, i) => {
      if(c.toLowerCase() === char.toLowerCase()) {
        result = i + 1;
      }
    });
  });
  return result;
}