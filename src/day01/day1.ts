import "../util/array";

export const day1step1 = (data: number[][]): number =>
  Math.max(...data.map((values) => values.sum()));

export const day1step2 = (data: number[][], topN: number = 3): number => {
  return data
    .map((values) => values.sum())
    .sort((a, b) => b - a)
    .slice(0, 3)
    .sum();
};
