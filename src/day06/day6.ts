export const solution = (data: string, matchLen: number = 4): number =>
   data.split('').findIndex((_, ndx, orig) => {
      return new Set(orig.slice(ndx, ndx + matchLen)).size === matchLen;
   }) + matchLen;

export const step2 = (data: string): number => 0;
