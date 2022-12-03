import '../util/array';

const scoreMap = "abcdefghijklmnopqrstuvwxyz".split('').reduce((map, letter, ndx) => {
   map.set(letter, ndx+1);
   map.set(letter.toUpperCase(), ndx+27)
   return map;
}, new Map<string, number>());

export const step1 = (rucksacks: string[]): number => {
   return rucksacks.map(r => [
      new Set(r.slice(0, r.length / 2).split('')), 
      new Set(r.slice(r.length/2).split(''))]
   )
   .map(([first, second]) => new Set([...first].filter(x => second.has(x))))
   .map(([overlap]) => scoreMap.get(overlap) ?? 0)
   .sum();
};

export const step2 = (data: any): number => {
   return 0;
};
