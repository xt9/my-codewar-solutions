// https://www.codewars.com/kata/558cb3df5f511f40d500001d

function nouveau (constructor, ...args) {
  let newInstance = {};
  // Copy the prototype of the constructor
  Object.setPrototypeOf(newInstance, constructor.prototype);
  
  // Bind the constructor to newInstance so that
  // 'this' references newInstance
  constructor = constructor.bind(newInstance);
  // Call the constructor with the array of args
  let res = constructor(...args);
  // If the constructor returns an object we return that, if not we return the new instance
  return isObject(res) ? res : newInstance;
}

function isObject(val) {
    if (val === null) {
      return false;
    }
    return ((typeof val === 'function') || (typeof val === 'object'));
}