import { step1, step2 } from './day9';
import { sample, sample2, input } from './data';

describe('day 9', () => {
   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(13);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(6181);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample2);
         expect(result).toEqual(36);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(2386);
      });
   });
});
