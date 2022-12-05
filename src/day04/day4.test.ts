import { solution, Strategy } from './day4';
import sample from './sample.json';
import input from './input.json';

describe('day 4', () => {
   describe('step 1', () => {
      test('sample', () => {
         const result = solution(sample);
         expect(result).toEqual(2);
      });
      test('input', () => {
         const result = solution(input);
         expect(result).toEqual(528);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = solution(sample, Strategy.Overlap);
         expect(result).toEqual(4);
      });
      test('input', () => {
         const result = solution(input, Strategy.Overlap);
         expect(result).toEqual(881);
      });
   });
});
