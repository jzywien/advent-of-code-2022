import { solution, Strategy } from './day2';
import { numericSolution, NumericStrategy } from './day2b';
import sample from './sample.json';
import input from './input.json';

describe('day 2', () => {
   describe('step 1', () => {
      test('sample', () => {
         const totalScore = solution(sample);
         expect(totalScore).toBe(15);
      });
      test('input', () => {
         const totalScore = solution(input);
         expect(totalScore).toBe(9177);
      });

      test('sample numeric', () => {
         const totalScore = numericSolution(sample);
         expect(totalScore).toBe(15);
      });
      test('input numeric', () => {
         const totalScore = numericSolution(input);
         expect(totalScore).toBe(9177);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const totalScore = solution(sample, Strategy.Result);
         expect(totalScore).toBe(12);
      });

      test('input', () => {
         const totalScore = solution(input, Strategy.Result);
         expect(totalScore).toBe(12111);
      });

      test('sample numeric', () => {
         const totalScore = numericSolution(sample, NumericStrategy.Result);
         expect(totalScore).toBe(12);
      });
      test('input numeric', () => {
         const totalScore = numericSolution(input, NumericStrategy.Result);
         expect(totalScore).toBe(12111);
      });
   });
});
