export type Point = number[];
export type Range = Point[];

/**
 * @param p1: Point at the start of the range
 * @param p2: Point at the end of the range
 * @returns boolean value if the range is fully contained inside the other range
 */
export const isInside = ([as, ae]: Point, [bs, be]: Point): boolean => (as >= bs && ae <= be) || (bs >= as && be <= ae);

/**
 * @param p1: Point at the start of the range
 * @param p2: Point at the end of the range
 * @returns boolean value if the points in the range overlap at all
 */

export const doesOverlap = ([as, ae]: Point, [bs, be]: Point): boolean => !(bs > ae || as > be);
