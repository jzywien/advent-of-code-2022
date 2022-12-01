export const day1step1 = (data: number[][]): number =>
  data.reduce((max, curr) => {
    const sum = curr.reduce((s, c) => s + c, 0);
    return sum > max ? sum : max;
  }, 0);

export const day1step2 = (data: number[][], topN: number = 3): number => {
  return data
    .reduce((top3, curr) => {
      const sum = curr.reduce((s, c) => s + c, 0);
      return [...top3, sum].sort((a, b) => b - a).slice(0, topN);
    }, [])
    .reduce((sum, curr) => sum + curr, 0);
};
