// TODO: ADD TIME AND SPACE COMPLEXITY
export function isOneAwayEdit(str1, str2) {
  const lengthDifference = Math.abs(str1.length - str2.length);
  if (lengthDifference >= 2) {
    return false;
  }

  let str1Index = 0;
  let str2Index = 0;
  let diffCount = 0;

  while (str1Index < str1.length && str2Index < str2.length) { // REVIEW: INSTEAD OF WHILE CAN USE FOR
  // for (
  //  let str1index = 0, let str2index = 0;
  //  str1index < str1.length && str2index < str2.length;
  //  str1index += 1, str2index += 2
  // ) {
    if (str1[str1Index] === str2[str2Index]) {
      str1Index += 1;
      str2Index += 1;
    } else {
      if (diffCount > 0) {
        return false;
      }
      if (lengthDifference === 0) {
        diffCount += 1;
        str1Index += 1;
        str2Index += 1;
      //
      } else if (lengthDifference === 1) {
        //
        if (str1.length > str2.length) {
          str1Index += 1;
        } else {
          str2Index += 1;
        }
      }
    }
  }
  return true;
}