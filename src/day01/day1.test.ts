import { step1, step2 } from './day1';
import sample from './sample.json';
import input from './input.json';

describe('day 1', () => {
   describe('step 1', () => {
      test('sample', () => {
         const maxCalories = step1(sample);
         expect(maxCalories).toEqual(24000);
      });
      test('input', () => {
         const maxCalories = step1(input);
         expect(maxCalories).toEqual(67016);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const maxCalories = step2(sample, 3);
         expect(maxCalories).toEqual(45000);
      });
      test('input', () => {
         const maxCalories = step2(input, 3);
         expect(maxCalories).toEqual(200116);
      });
   });
});
