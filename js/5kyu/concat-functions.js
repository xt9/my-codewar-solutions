// https://www.codewars.com/kata/concatenating-functions

// example funcs
let addOne = (v) => v + 1;

Function.prototype.pipe = function(...fns) {
  // unshift the current function to the start of fns
  // for example if we call it with addOne.pipe(), 'this' would be the addOne function
  fns.unshift(this);
  return (e) => fns.reduce((total, fn) => fn(total), e);
}
