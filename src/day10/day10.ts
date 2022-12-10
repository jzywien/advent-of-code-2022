const buildCycles = (data: [string, number?][]) =>
   data.reduce((c: number[], [cmd, val]) => {
      return cmd === 'addx' ? [...c, 0, val!] : [...c, 0];
   }, []);

export const step1 = (data: [string, number?][]): number => {
   const cycles = buildCycles(data);

   let x = 1;
   let strength = 0;
   for (let i = 0; i < cycles.length; ++i) {
      const cycle = i + 1;
      if ((cycle - 20) % 40 === 0) strength += cycle * x;
      x += cycles[i];
   }

   return strength;
};

export const step2 = (data: [string, number?][]): string => {
   const cycles = buildCycles(data);

   const grid: string[][] = Array(6)
      .fill(0)
      .map(() => new Array(40).fill(''));

   let x = 1;
   for (let i = 0; i < cycles.length; ++i) {
      const row = Math.floor(i / 40);
      const col = i % 40;
      const dx = col + 1 - x;

      grid[row][col] = dx >= 0 && dx < 3 ? '#' : '.';

      x += cycles[i];
   }

   const vis = grid.reduce((grid, line) => `${grid}${line.join('')}\n`, '');
   console.log(vis);
   return vis;
};
