import { Range, isInside, doesOverlap, Point } from '../util/geometry';

export const Strategy = {
   Inside: (p1: Point, p2: Point): boolean => isInside(p1, p2),
   Overlap: (p1: Point, p2: Point): boolean => doesOverlap(p1, p2),
};

export const solution = (assignmentPairs: Range[], strategy = Strategy.Inside): number =>
   assignmentPairs.reduce((count, [p1, p2]) => (strategy(p1, p2) ? count + 1 : count), 0);
