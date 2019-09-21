export function hasUniqueCharactersSort(str) {
  str.sort();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      return false;
    }
  }
  return false;
}