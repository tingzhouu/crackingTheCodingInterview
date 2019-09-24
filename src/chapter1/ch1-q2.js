// Check Permutation: Given 2 strings, write a method to decide if one is a permutation of the other

// TODO: ADD TIME AND SPACE COMPLEXITY
export function isPermutationOfOther(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1.sort();
  str2.sort();

  // instead of such a long for loop, use the 'every' method for javascript arrays.
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }
  return true;
}

export function isPermutationOfOtherRevised(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  str1.sort();
  str2.sort();

  const hasDifferentCharacter = str1.every((str1char, index) => {
    return str1char === str2[index];
  });

  return hasDifferentCharacter;
}