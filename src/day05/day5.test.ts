import { step1, step2 } from './day5';
import * as sample from './sample';
import * as input from './input';

const deepCopy = (input: any) => JSON.parse(JSON.stringify(input));

describe('day 5', () => {
   describe('step 1', () => {
      test('sample', () => {
         const result = step1(deepCopy(sample.stacks), sample.moves);
         expect(result).toEqual('CMZ');
      });
      test('input', () => {
         const result = step1(deepCopy(input.stacks), input.moves);
         expect(result).toEqual('FJSRQCFTN');
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(deepCopy(sample.stacks), sample.moves);
         expect(result).toEqual('MCD');
      });
      test('input', () => {
         const result = step2(deepCopy(input.stacks), input.moves);
         expect(result).toEqual('CJVLJQPHS');
      });
   });
});
