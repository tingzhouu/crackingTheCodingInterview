import { expect } from 'chai';
import * as functions from './ch1-q6';

const testCases = [
  'abcdefg',
  'aabcdeff',
  'bbbbbbbb',
];

const expectedResults = [
  'abcdefg',
  'a2bcdef2',
  'b8'
];

for (let functionKey in functions) {
  const functionToTest = functions[functionKey];
  describe(`ch1-q6 - ${functionKey}`, function() {
    testCases.forEach((testCase, index) => {
      const actualOutput = functionToTest(testCase.split(''));
      const expectedOutput = expectedResults[index];
      it(`actual output: ${actualOutput}, expected output: ${expectedOutput}`, function() {
        expect(actualOutput).to.equal(expectedOutput);
      });
    });
  });
}