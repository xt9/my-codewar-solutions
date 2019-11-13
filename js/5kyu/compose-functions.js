// https://www.codewars.com/kata/51f9d3db4095e07f130001ee

// invoke the passed functions and return the new total
var compose = function(val, ...fns) {
  // invoke the passed functions and return the new total
  return fns.reduce((total, f) => f(total), val);
}