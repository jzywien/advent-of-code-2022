import { step1, step2 } from './day4';
import sample from './sample.json';
import input from './input.json';

describe('day 4', () => {
   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(2);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(528);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(4);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(881);
      });
   });
});
