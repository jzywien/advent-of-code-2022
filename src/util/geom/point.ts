import { NUM } from '../regex';

export type PointStr = `${number},${number}`;

export class Point {
   public x!: number;
   public y!: number;

   constructor(x: number | PointStr, y?: number) {
      if (typeof x === 'number' && typeof y === 'number') {
         this.x = x;
         this.y = y;
      } else if (typeof x === 'string') {
         [this.x, this.y] = (x.match(NUM) || []).map((s) => parseInt(s, 10));
      }
   }

   toString(): PointStr {
      return `${this.x},${this.y}`;
   }

   equals(p: Point) {
      return this.x === p.x && this.y === p.y;
   }
}
