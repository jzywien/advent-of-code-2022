import { step1, step2 } from './day6';
import { data } from './input';

describe('day 6', () => {
   describe.only('step 1', () => {
      describe('samples', () => {
         test('sample 1', () => {
            const result = step1('mjqjpqmgbljsphdztnvjfqwrcgsmlb');
            expect(result).toEqual(7);
         });
         test('sample 2', () => {
            const result = step1('bvwbjplbgvbhsrlpgdmjqwftvncz');
            expect(result).toEqual(5);
         });
         test('sample 3', () => {
            const result = step1('nppdvjthqldpwncqszvftbrmjlhg');
            expect(result).toEqual(6);
         });
         test('sample 4', () => {
            const result = step1('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg');
            expect(result).toEqual(10);
         });
         test('sample 5', () => {
            const result = step1('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw');
            expect(result).toEqual(11);
         });
      });
      test('input', () => {
         const result = step1(data);
         expect(result).toEqual(1361);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2('');
         expect(result).toEqual(-1);
      });
      test('input', () => {
         const result = step2(data);
         expect(result).toEqual(-1);
      });
   });
});
