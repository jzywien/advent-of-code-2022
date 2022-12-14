import { getInput } from '../util/file';
import { step1, step2 } from './day1';

describe('day 1', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(24000);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(67016);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample);
         expect(result).toEqual(45000);
      });
      test('input', () => {
         const result = step2(input);
         expect(result).toEqual(200116);
      });
   });
});
