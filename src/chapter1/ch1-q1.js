// Is Unique: Implement an algorithm to determine if a string has all unique characters

export function hasUniqueCharactersSort(str) {
  str.sort();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return true;
}


export function hasUniqueCharactersSet(str) {
  let chars = new Set();
  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;
}