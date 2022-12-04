import '../util/array';

const scoreMap = "abcdefghijklmnopqrstuvwxyz".split('').reduce((map, letter, ndx) => {
   map.set(letter, ndx+1);
   map.set(letter.toUpperCase(), ndx+27)
   return map;
}, new Map<string, number>());

export const step1 = (rucksacks: string[]): number => rucksacks
   .map(r => [
      new Set(r.slice(0, r.length / 2).split('')), 
      new Set(r.slice(r.length/2).split(''))]
   )
   .map(([first, second]) => new Set([...first].filter(x => second.has(x))))
   .map(([overlap]) => scoreMap.get(overlap) ?? 0)
   .sum();

export const step2 = (rucksacks: string[]): number => rucksacks
   .chunk(3)
   .map(([r1, r2, r3]) => {
      const a = new Set(r1);
      const b = new Set(r2);
      const c = new Set(r3);
      return new Set([...a].filter(x => b.has(x) && c.has(x)))
   })
   .map(([overlap]) => scoreMap.get(overlap) ?? 0)
   .sum();
