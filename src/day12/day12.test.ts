import { input, sample } from './data';
import { step1, step2 } from './day12';

describe('day 11', () => {
   describe('step 1', () => {
      it.only('sample', () => {
         const result = step1(sample);
         expect(result).toBe(31);
      });
      it('input', () => {
         const result = step1(input);
         expect(result).toBe(0);
      });
   });

   describe('step 2', () => {
      it('sample', () => {
         const result = step2(sample);
         expect(result).toBe(0);
      });
      it('input', () => {
         const result = step2(input);
         expect(result).toBe(0);
      });
   });
});
