export function stringCompression(str) {
  let output = '';
  let i = 0;
  while (i < str.length) {
    let charCount = 1;
    while ((i < str.length - 1) && (str[i] === str[i + 1])) {
      charCount += 1;
      i += 1;
    }
    if (charCount === 1) {
      output += str[i];
      i += 1;
    } else {
      output += `${str[i]}${charCount}`;
      i += 1;
    }
  }
  return output;
}