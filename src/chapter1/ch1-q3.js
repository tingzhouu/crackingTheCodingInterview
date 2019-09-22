// URLify - Write a method to replace all spaces in a string with '%20'.

export function URLify(str) {
  if (!str || str.length === 0) {
    return str;
  }

  let output = '';
  let pointerIndex = 0;

  while (str[pointerIndex] === ' ' && pointerIndex < str.length) {
    pointerIndex += 1;
  }

  if (pointerIndex === str.length - 1 && str[pointerIndex] === ' ') {
    return output;
  }

  while (pointerIndex < str.length) {
    if (str[pointerIndex] !== ' ') {
      output += str[pointerIndex];
      pointerIndex += 1;
    } else {
      while (str[pointerIndex] === ' ') {
        pointerIndex += 1;
      }
      if (pointerIndex !== str.length) {
        output += '%20';
      }
    }
  }
  return output;
}
