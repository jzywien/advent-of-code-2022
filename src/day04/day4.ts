import '../util/polyfills';
import { isInside, doesOverlap, Point } from '../util/geometry';

export const Strategy = {
   Inside: (p1: Point, p2: Point): boolean => isInside(p1, p2),
   Overlap: (p1: Point, p2: Point): boolean => doesOverlap(p1, p2),
};

export const solution = (input: string, strategy = Strategy.Inside): number =>
   input
      .lines()
      .map((line) => line.split(',').map((r) => r.split('-').map((n) => parseInt(n)) as Point))
      .reduce((count, [p1, p2]) => (strategy(p1, p2) ? count + 1 : count), 0);
