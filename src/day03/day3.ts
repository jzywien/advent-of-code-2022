import '../util/array';
import '../util/set';

const scoreMap = 'abcdefghijklmnopqrstuvwxyz'.split('').reduce((map, letter, ndx) => {
   map.set(letter, ndx + 1);
   map.set(letter.toUpperCase(), ndx + 27);
   return map;
}, new Map<string, number>());

export const step1 = (rucksacks: string[]): number =>
   rucksacks
      .map((r) => [new Set(r.slice(0, r.length / 2).split('')), new Set(r.slice(r.length / 2).split(''))])
      .map(([first, second]) => first.intersect(second))
      .map(([overlap]) => scoreMap.get(overlap)!)
      .sum();

export const step2 = (rucksacks: string[]): number =>
   rucksacks
      .chunk(3)
      .map(([r1, r2, r3]) => new Set(r1).intersect(new Set(r2), new Set(r3)))
      .map(([overlap]) => scoreMap.get(overlap)!)
      .sum();
