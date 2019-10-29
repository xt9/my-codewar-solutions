// https://www.codewars.com/kata/rgb-to-hex-conversion

function rgb(r, g, b){
  // getValidHexString enforces constraints on the inputs and returns
  // a hexstring without zero-padding, calling padHexString will zero-pad it.
  let R = padHexString(getValidHexString(r));
  let G = padHexString(getValidHexString(g));
  let B = padHexString(getValidHexString(b));
  return R + G + B;
}

function padHexString(hexStr) {
  const chars = [...hexStr];
  // split the hex string into characters, if the string has 2 characters it needs no padding.
  return chars.length === 2 ? hexStr : '0' + chars[0];
}

function getValidHexString(n) {
  let result;
  if(n <= 0) {
    result = 0;
  } else if(n >= 255) {
    result = 255;
  } else {
    result = n;
  }
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  // Number.toString takes a radix/base, and we know that hexadecimal numbers has a base of 16.
  return result.toString(16).toUpperCase();
}