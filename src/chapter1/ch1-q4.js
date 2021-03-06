// TODO: ADD TIME AND SPACE COMPLEXITY
export function isPalindromePermutation(str) {
  if (str.length <= 1) {
    return true;
  }

  // REVIEW: A PALINDROME CANNOT HAVE MORE THAN 1 CHARACTER WITH ODD NUMBER OF OCCURRENCES
  // THEREFORE NO NEED TO CHECK FOR SO MANY THINGS 
  let charWithMoreThanTwoAndOddNumberOccurrence = 0;
  let charWithOneOccurrence = 0;
  let lengthWithoutSpaces = 0;

  // REVIEW: CAN USE JAVASCRIPT MAP, OR USE SET SOLUTION BELOW INSTEAD
  let charMap = {};
  str.forEach(char => {
    if (char !== ' ') {
      const hasLetter = charMap[char];
      if (hasLetter) {
        charMap[char] = charMap[char] + 1;
      } else {
        charMap[char] = 1;
      }
    }
  });

  for (let charMapKey in charMap) {
    const numChar = charMap[charMapKey];
    lengthWithoutSpaces += numChar;
    if (numChar > 2 && numChar % 2 !== 0) {
      charWithMoreThanTwoAndOddNumberOccurrence += 1;
    } else if (numChar === 1) {
      charWithOneOccurrence += 1;
    }
  }

  if (lengthWithoutSpaces % 2 === 0) {
    return charWithMoreThanTwoAndOddNumberOccurrence === 0 && charWithOneOccurrence === 0;
  } else {
    if (charWithOneOccurrence > 1) {
      return false;
    }
    if (charWithMoreThanTwoAndOddNumberOccurrence > 1) {
      return false;
    }
    return true;
  }
}

// TODO: ADD TIME AND SPACE COMPLEXITY
export function isPalindromePermutationSet(str) {
  let chars = new Set();
  str.forEach((char) => {
    if (char !== ' ') {
      if (chars.has(char)) {
        chars.delete(char);
      } else {
        chars.add(char);
      }
    }
  });
  return chars.size <= 1;
}