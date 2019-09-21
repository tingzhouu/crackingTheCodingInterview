import { expect } from 'chai';
import * as funcs from './ch1-q1';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch1-q1: ' + key, function() {
    ['abcdefg', 'qwerty', '12345'].forEach(arg => {
      it(`returns true for unique string: '${arg}'`, function() {
        expect(func(arg.split(''))).to.be.true;
      });
    });
  });
}