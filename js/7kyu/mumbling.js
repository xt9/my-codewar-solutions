// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(s) {
  chars = Array.from(s);
  result = "";
  
  chars.forEach((c, i) => {
    result += `${c.toUpperCase()}`;
    result += `${c.toLowerCase().repeat(i)}`;
    if(i !== chars.length - 1) {
      result += "-";
    }
  })
  
  return result;
}