import { expect } from 'chai';
import * as functionsWritten from './ch1-q2';

for (let functionWrittenKey in functionsWritten) {
  let functionWritten = functionsWritten[functionWrittenKey];
  describe('ch1-q2: ' + functionWrittenKey, () => {
    [
      { str1: 'abcdefg', str2: 'gabcdef'},
      { str1: '12345', str2: '51243' },
    ].forEach(testItem => {
      const { str1, str2 } = testItem;
      it(`the 2 strings are permutations of one another: string 1: ${str1}; string 2: ${str2}`, () => {
        expect(functionWritten(str1.split(''), str2.split(''))).to.be.true;
      });
    });
  });
}