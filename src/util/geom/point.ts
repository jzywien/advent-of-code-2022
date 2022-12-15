import { clamp } from '../math';
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

   /**
    * Finds all points between me and input point
    * @param p point to find points between
    * @returns list of all points
    */
   between(p: Point): Point[] {
      const between: Point[] = [];
      const dx = this.x - p.x;
      const dy = this.y - p.y;
      const d = Math.max(Math.abs(dx), Math.abs(dy));
      for (let i = 0; i <= d; ++i) {
         const x = p.x + i * clamp(dx, -1, 1);
         const y = p.y + i * clamp(dy, -1, 1);
         between.push(new Point(x, y));
      }
      return between;
   }

   toString(): PointStr {
      return `${this.x},${this.y}`;
   }

   equals(p: Point) {
      return this.x === p.x && this.y === p.y;
   }
}
