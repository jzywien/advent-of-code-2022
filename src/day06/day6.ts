export const step1 = (data: string): number =>
   data.split('').findIndex((_, ndx, orig) => {
      return new Set(orig.slice(ndx, ndx + 4)).size === 4;
   }) + 4;

export const step2 = (data: string): number => 0;
