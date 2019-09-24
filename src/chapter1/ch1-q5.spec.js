import { expect } from 'chai';
import * as functions from './ch1-q5';

for (let functionToTestKey in functions) {
  const functionToTest = functions[functionToTestKey];
  describe(`ch1-q5 ${functionToTestKey}`, function() {
    [
      { str1: 'pale', str2: 'ple' },
      { str1: 'pales', str2: 'pale' },
      { str1: 'asd', str2: 'asdf' },
    ].forEach(testItem => {
      const { str1, str2 } = testItem;
      it('should return true for strings which require 1 or less edit', function() {
        expect(functionToTest(str1.split(''), str2.split(''))).to.be.true;
      });
    });

    [
      { str1: 'pale', str2: 'bake' },
      { str1: 'asdasdasd', str2: 'asdfg' },
      { str1: 'asdf', str2: 'bnjk' },
    ].forEach(testItem => {
      const { str1, str2 } = testItem;
      it('should return false for strings which require 2 or more edits', function() {
        expect(functionToTest(
          str1.split(''),
          str2.split('')
        )).to.be.false;
      });
    });
  });
}
