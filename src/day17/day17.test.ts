import { getInput } from '../util/file';
import { step1, step2 } from './day17';

describe('day 17', () => {
   let [input, sample] = ['', ''];
   beforeEach(async () => {
      sample = await getInput(__dirname, 'sample');
      input = await getInput(__dirname, 'input');
   });

   describe('step 1', () => {
      it('sample', () => {
         const result = step1(sample);
         expect(result).toBe(3068);
      });

      it('input', () => {
         const result = step1(input);
         expect(result).toBe(3071);
      });
   });

   describe('step 2', () => {
      it('sample', () => {
         const result = step2(sample);
         expect(result).toBe(1514285714288);
      });

      it('input', () => {
         const result = step2(input);
         expect(result).toBe(0);
      });
   });
});
