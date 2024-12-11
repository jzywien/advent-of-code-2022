import { getInput } from '../util/file';
import { step1, step2 } from './day18';

describe('day 18', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      it('sample', () => {
         const result = step1(sample);
         expect(result).toBe(64);
      });

      it('input', () => {
         const result = step1(input);
         expect(result).toBe(3364);
      });
   });

   describe('step 2', () => {
      it('sample', () => {
         const result = step2(sample);
         expect(result).toBe(58);
      });

      it('input', () => {
         const result = step2(input);
         expect(result).toBe(2006);
      });
   });
});
