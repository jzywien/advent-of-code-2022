import { input, sample } from './data';
import { compare, step1, step2 } from './day13';

describe('day 13', () => {
   describe('step 1', () => {
      it('sample', () => {
         const result = step1(sample);
         expect(result).toBe(13);
      });

      it('input', () => {
         const result = step1(input);
         expect(result).toBe(5196);
      });

      [true, true, false, true, false, true, false, false].forEach((result, ndx) => {
         it(`pair ${ndx + 1} should be ${result}`, () => {
            const [left, right] = sample.at(ndx)!;
            const correct = compare(left, right) < 0;
            expect(correct).toBe(result);
         });
      });
   });

   describe('step 2', () => {
      it('sample', () => {
         const result = step2(sample);
         expect(result).toBe(140);
      });

      it('input', () => {
         const result = step2(input);
         expect(result).toBe(22134);
      });
   });
});
