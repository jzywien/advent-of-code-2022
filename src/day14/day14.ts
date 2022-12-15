import { ObjectSet } from '../util/set/object-set';
import { Point, PointStr } from '../util/geom';
import { clamp } from '../util/math';
import '../util/polyfills';

const getRocks = (input: string): ObjectSet<Point> =>
   input.lines().reduce((rockSet, line) => {
      let prev: Point | undefined = undefined;
      for (let p of line.split('->')) {
         const point = new Point(p as PointStr);
         if (!!prev) {
            const dx = point.x - prev.x;
            const dy = point.y - prev.y;
            const d = Math.max(Math.abs(dx), Math.abs(dy));
            for (let i = 0; i <= d; ++i) {
               const x = prev.x + i * clamp(dx, -1, 1);
               const y = prev.y + i * clamp(dy, -1, 1);
               rockSet.add(new Point(x, y));
            }
         }
         prev = point;
      }
      return rockSet;
   }, new ObjectSet<Point>());

const addFloor = (rocks: ObjectSet<Point>): number => {
   const xrange = [...rocks].map((r) => r.x);
   const xLo = Math.min(...xrange) - 500;
   const xHi = Math.max(...xrange) + 500;
   const floor = 2 + Math.max(...[...rocks].map((r) => r.y));
   for (let x = xLo; x < xHi; ++x) rocks.add(new Point(x, floor));

   return floor;
};

export const step1 = (input: string) => {
   const rocks = getRocks(input);
   const floor = addFloor(rocks);

   let t = -1;
   let found = false;
   while (!found) {
      ++t;
      let sand = new Point(500, 0);
      while (!found) {
         if (sand.y + 1 >= floor) found = true;

         if (!rocks.has(new Point(sand.x, sand.y + 1))) {
            sand = new Point(sand.x, sand.y + 1);
         } else if (!rocks.has(new Point(sand.x - 1, sand.y + 1))) {
            sand = new Point(sand.x - 1, sand.y + 1);
         } else if (!rocks.has(new Point(sand.x + 1, sand.y + 1))) {
            sand = new Point(sand.x + 1, sand.y + 1);
         } else break; // found place for sand
      }
      rocks.add(sand);
   }

   return t;
};

export const step2 = (input: string) => {
   const rocks = getRocks(input);
   addFloor(rocks);

   let t = -1;
   let found = false;
   while (!found) {
      ++t;
      let sand = new Point(500, 0);
      while (true) {
         if (!rocks.has(new Point(sand.x, sand.y + 1))) {
            sand = new Point(sand.x, sand.y + 1);
         } else if (!rocks.has(new Point(sand.x - 1, sand.y + 1))) {
            sand = new Point(sand.x - 1, sand.y + 1);
         } else if (!rocks.has(new Point(sand.x + 1, sand.y + 1))) {
            sand = new Point(sand.x + 1, sand.y + 1);
         } else break;
      }
      found = sand.equals(new Point(500, 0));
      rocks.add(sand);
   }

   return t + 1;
};
