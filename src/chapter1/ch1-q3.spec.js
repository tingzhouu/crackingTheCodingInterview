import { expect } from 'chai';
import * as functions from './ch1-q3';

const expectedOutput = [
  'asdnasdjkas', // no space
  'asdf%20qwer', // no space at front, one space between words, no space at back
  'asdf%20qwer', // no space at front, multiple space between words, no space at back
  'asdf%20qwer', // no space at front, one space between words, one space at back
  'asdf%20qwer', // no space at front, one space between words, multiple spaces at back
  'asdf%20qwer', // one space at front, one space between words, no space at back
  'asdf%20qwer', // one space at front, multiple spaces between words, no space at back
  'asdf%20qwer', // multiple spaces at front, one space between words, no space at back
  'asdf%20qwer', // multiple spaces at front, multiple spaces between words, no space at back
  'asdf%20qwer', // multiple spaces at front, multiple spaces between words, one space at back
  'asdf%20qwer', // multiple spaces at front, multiple spaces between words, multiple spaces at back
  'asdf%20qwer', // one space at front, multiple spaces between words, no space at back
  'asdf%20qwer', // one space at front, multiple spaces between words, one space at back
  'asdf%20qwer', // one space at front, multiple spaces between words, multiple space at back
  'http://www.google.com/', // actual URL without %20
  'http://www.google.com/search?q=something%20really%20really%20funny', // actual URL with %20
];

for (let functionWrittenKey in functions) {
  let functionWritten = functions[functionWrittenKey];
  describe('ch1-q3' + functionWrittenKey, () => {
    [
      'asdnasdjkas', // no space
      'asdf qwer', // no space at front, one space between words, no space at back
      'asdf    qwer', // no space at front, multiple space between words, no space at back
      'asdf qwer ', // no space at front, one space between words, one space at back
      'asdf qwer     ', // no space at front, one space between words, multiple spaces at back
      ' asdf qwer', // one space at front, one space between words, no space at back
      ' asdf    qwer', // one space at front, multiple spaces between words, no space at back
      '   asdf qwer', // multiple spaces at front, one space between words, no space at back
      '   asdf    qwer', // multiple spaces at front, multiple spaces between words, no space at back
      '   asdf    qwer ', // multiple spaces at front, multiple spaces between words, one space at back
      '   asdf    qwer    ', // multiple spaces at front, multiple spaces between words, multiple spaces at back
      '   asdf   qwer', // one space at front, multiple spaces between words, no space at back
      '   asdf   qwer ', // one space at front, multiple spaces between words, one space at back
      '   asdf   qwer     ', // one space at front, multiple spaces between words, multiple space at back
      'http://www.google.com/', // actual URL without %20
      'http://www.google.com/search?q=something really really funny', // actual URL with %20
    ].forEach((testString, index) => {
      const output = functionWritten(testString.split(''));
      it(`input: '${testString}' returns true for correct URL`, function (){
        const expected = expectedOutput[index];
        expect(output).to.eql(expected);
      });
    });
  });
}