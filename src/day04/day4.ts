import { Range, isInside, doesOverlap } from '../util/geometry';

export const step1 = (assignmentPairs: Range[]): number =>
   assignmentPairs.reduce((count, [p1, p2]) => (isInside(p1, p2) ? count + 1 : count), 0);

export const step2 = (assignmentPairs: Range[]): number =>
   assignmentPairs.reduce((count, [p1, p2]) => (doesOverlap(p1, p2) ? count + 1 : count), 0);
