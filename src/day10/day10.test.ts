import { step1, step2 } from './day10';
import { sample, input } from './data';

describe('day 10', () => {
   describe('step 1', () => {
      test('sample', () => {
         const result = step1(sample);
         expect(result).toEqual(13140);
      });
      test('input', () => {
         const result = step1(input);
         expect(result).toEqual(16060);
      });
   });

   describe('step 2', () => {
      test('sample', () => {
         const result = step2(sample).replace(/\s/g, '');
         expect(result).toEqual(
            `
         ##..##..##..##..##..##..##..##..##..##..
         ###...###...###...###...###...###...###.
         ####....####....####....####....####....
         #####.....#####.....#####.....#####.....
         ######......######......######......####
         #######.......#######.......#######.....`.replace(/\s/g, '')
         );
      });
      test('input', () => {
         const result = step2(input).replace(/\s/g, '');
         expect(result).toEqual(
            `
         ###...##...##..####.#..#.#....#..#.####.
         #..#.#..#.#..#.#....#.#..#....#..#.#....
         ###..#..#.#....###..##...#....####.###..
         #..#.####.#....#....#.#..#....#..#.#....
         #..#.#..#.#..#.#....#.#..#....#..#.#....
         ###..#..#..##..####.#..#.####.#..#.#....         
         `.replace(/\s/g, '')
         );
      });
   });
});
