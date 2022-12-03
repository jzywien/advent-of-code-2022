import { step1, step2 } from './day3';
import sample from './sample.json';
import input from './input.json';

describe('day 3', () => {
   describe.only('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toBe(157);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toBe(7967);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toBe(0);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toBe(0);
      });
   });
});
