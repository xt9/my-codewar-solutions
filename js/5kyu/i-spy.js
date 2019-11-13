// https://www.codewars.com/kata/555185132c0d4cca3d000197

function spyOn (func) {
  let dummy = () => null;
  // make the Function object call the dummy object
  let result = function(...args) {
    return dummy(...args);
  }
  // Init tracking variables
  result.calledTimes = 0;
  result.callHistory = [];
  result.returnHistory = [];
  
  // replace the dummy function with our actual implementation now that
  // the variables are not undefined.
  dummy = function(...args) {
    result.callHistory.push(...args);
    result.calledTimes++;
    let r = func(...args);
    result.returnHistory.push(r);
    return r;
  };
  
  result.callCount = function() {
    return this.calledTimes;
  }
  
  result.returned = function(val) {
    let result = this.returnHistory.find(e => e === val);
    return result ? true : false;
  }
  
  result.wasCalledWith = function(val) {
    let result = this.callHistory.find(e => e === val)
    return result ? true : false;
  }

  return result;
}