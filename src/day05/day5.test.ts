import { step1, step2 } from './day5';
import sample from './sample.json';
import input from './input.json';

describe('day 5', () => {
   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(-1);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(-1);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(-1);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(-1);
      });
   });
});
