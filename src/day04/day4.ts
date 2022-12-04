type Point = number[];
type Range = Point[];

const isInside = ([as, ae]: Point, [bs, be]: Point): boolean => ((as >= bs && ae <= be) || (bs >= as && be <= ae));
const doesOverlap = ([as, ae]: Point, [bs, be]: Point): boolean => !(bs > ae || as > be);

export const step1 = (assignmentPairs: Range[]): number => assignmentPairs.reduce(
   (count, [p1, p2]) => isInside(p1, p2) ? count + 1 : count
, 0);

export const step2 = (assignmentPairs: Range[]): number => assignmentPairs.reduce(
   (count, [p1, p2]) => doesOverlap(p1, p2) ? count + 1 : count
, 0);
