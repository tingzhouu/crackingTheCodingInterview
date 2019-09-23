import { expect } from 'chai';
import * as functions from './ch1-q4';

for (let functionKey in functions) {
  const functionToTest = functions[functionKey];
  describe('ch1-q4 test' + functionKey, function() {
    [
      'tact coa',
      'aabb',
      'ab a b',
      ' a b a b ',
      'sasadfgsadfghjk;hjk;sadfghjk;dfghjk;',
      'sa sadfgsadfgh jk;hjkz;sadfg hjk;dfghjk;',
    ].forEach(testCase => {
      it(`returns true for palindrome permutation: ${testCase}`, function() {
        expect(functionToTest(testCase.split(''))).to.be.true;
      });
    });

    [
      'a b',
      '1234567890',
      'abcadef',
    ].forEach(testCase => {
      it(`returns false for palindrome permutation: ${testCase}`, function() {
        expect(functionToTest(testCase.split(''))).to.be.false;
      });
    });
  });

}