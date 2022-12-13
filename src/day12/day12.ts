import { Direction } from '../util/direction';

const coord = ([x, y]: [number, number]) => `${x}:${y}`;

const findAdjacent = (grid: string[][], r: number, c: number): [number, number][] => {
   return Object.values(Direction)
      .map(([dx, dy]) => [r + dx, c + dy])
      .reduce((adj, [nr, nc]) => {
         if (nr < 0 || nc < 0 || nr >= grid.length || nc >= grid[r].length) return adj;
         if (grid[nr][nc].charCodeAt(0) - grid[r][c].charCodeAt(0) > 1) return adj;
         return [...adj, [nr, nc]];
      }, [] as [number, number][]);
};

const findAdjacent2 = (grid: string[][], r: number, c: number): [number, number][] => {
   return Object.values(Direction)
      .map(([dx, dy]) => [r + dx, c + dy])
      .reduce((adj, [nr, nc]) => {
         if (nr < 0 || nc < 0 || nr >= grid.length || nc >= grid[r].length) return adj;
         if (grid[nr][nc].charCodeAt(0) - grid[r][c].charCodeAt(0) < -1) return adj;
         return [...adj, [nr, nc]];
      }, [] as [number, number][]);
};

export const step1 = (lines: string[]): number => {
   let start: [number, number] = [0, 0];
   let end: [number, number] = [0, 0];

   const grid = lines.reduce((grid: string[][], line, row) => {
      const chars = line.split('');
      const charCodes = chars.map((char, col) => {
         if (char === 'S') {
            start = [row, col];
            return 'a';
         }
         if (char === 'E') {
            end = [row, col];
            return 'z';
         }
         return char;
      });
      return [...grid, charCodes];
   }, []);

   const [sr, sc] = start;
   const [er, ec] = end;
   const visited = new Set([`${sr}:${sc}`]);
   const queue: [number, string][] = [[0, `${sr}:${sc}`]];
   while (queue.length) {
      const [dist, vtx] = queue.shift()!;
      const [r, c] = vtx.split(':').map((n) => parseInt(n));
      for (let adj of findAdjacent(grid, r, c)) {
         const pos = coord(adj);
         if (pos === `${er}:${ec}`) return dist + 1;
         if (visited.has(pos)) continue;
         visited.add(pos);
         queue.push([dist + 1, pos]);
      }
   }
   return -1;
};

export const step2 = (lines: string[]): number => {
   let start: [number, number] = [0, 0];

   const grid = lines.reduce((grid: string[][], line, row) => {
      const chars = line.split('');
      const charCodes = chars.map((char, col) => {
         if (char === 'S') {
            return 'a';
         }
         if (char === 'E') {
            start = [row, col];
            return 'z';
         }
         return char;
      });
      return [...grid, charCodes];
   }, []);

   const [sr, sc] = start;
   const visited = new Set([`${sr}:${sc}`]);
   const queue: [number, string][] = [[0, `${sr}:${sc}`]];
   while (queue.length) {
      const [dist, vtx] = queue.shift()!;
      const [r, c] = vtx.split(':').map((n) => parseInt(n));
      for (let adj of findAdjacent2(grid, r, c)) {
         const [nr, nc] = adj;
         if (grid[nr][nc] === 'a') return dist + 1;

         const pos = coord(adj);
         if (visited.has(pos)) continue;
         visited.add(pos);
         queue.push([dist + 1, pos]);
      }
   }
   return -1;
};
