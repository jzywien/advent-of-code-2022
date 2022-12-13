import '../util/array';
import { NumberOrArray } from './data';

export const compare = (left: NumberOrArray, right: NumberOrArray): number => {
   if (Number.isInteger(left) && Number.isInteger(right)) {
      return (left as number) - (right as number);
   } else if (Array.isArray(left) && Array.isArray(right)) {
      for (let i = 0; i < Math.min(left.length, right.length); ++i) {
         const result = compare(left[i], right[i]);
         if (result !== 0) return result;
      }
      return left.length - right.length;
   } else if (Number.isInteger(left)) {
      return compare([left], right);
   } else return compare(left, [right]);
};

export const step1 = (data: [NumberOrArray, NumberOrArray][]): number =>
   data.map(([left, right], ndx) => (compare(left, right) < 0 ? ndx + 1 : 0)).sum();

export const step2 = (data: [NumberOrArray, NumberOrArray][]): number => {
   const initial: NumberOrArray = [[[2]], [[6]]];
   const packets = data
      .reduce((all, [left, right]) => [...all, left, right], initial)
      .sort((left, right) => compare(left, right))
      .map((packet) => JSON.stringify(packet));

   const first = packets.findIndex((val) => val === '[[2]]') + 1;
   const last = packets.findIndex((val) => val === '[[6]]') + 1;

   return first * last;
};
