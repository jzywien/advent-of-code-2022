import { Direction } from '../util/direction';
import '../util/polyfills';

type Point = [number, number];

const coord = ([x, y]: Point) => `${x}:${y}`;

const findAdjacent = (grid: string[][], r: number, c: number, notAdjTest: (num: number) => boolean): Point[] => {
   return Object.values(Direction)
      .map(([dx, dy]) => [r + dx, c + dy])
      .reduce((adj, [nr, nc]) => {
         if (nr < 0 || nc < 0 || nr >= grid.length || nc >= grid[r].length) return adj;
         const diff = grid[nr][nc].charCodeAt(0) - grid[r][c].charCodeAt(0);
         if (notAdjTest(diff)) return adj;
         return [...adj, [nr, nc]];
      }, [] as Point[]);
};

const buildGrid = (input: string, start: string, end?: string): [string[][], Point, Point | undefined] => {
   let s: Point = [0, 0];
   let e: Point | undefined;

   const grid = input.lines().reduce((grid: string[][], line, row) => {
      const chars = line.split('');
      const charCodes = chars.map((char, col) => {
         if (char === start) s = [row, col];
         else if (char === end) e = [row, col];
         if (char === 'S') return 'a';
         else if (char === 'E') return 'z';
         return char;
      });
      return [...grid, charCodes];
   }, []);

   return [grid, s, e];
};

export const step1 = (input: string): number => {
   const [grid, start, end] = buildGrid(input, 'S', 'E');
   const [sr, sc] = start;
   const [er, ec] = end ?? [0, 0];

   const visited = new Set([`${sr}:${sc}`]);
   const queue: [number, string][] = [[0, `${sr}:${sc}`]];
   const notAdjTest = (num: number) => num > 1;
   while (queue.length) {
      const [dist, vtx] = queue.shift()!;
      const [r, c] = vtx.split(':').map((n) => parseInt(n));
      for (let adj of findAdjacent(grid, r, c, notAdjTest)) {
         const pos = coord(adj);
         if (pos === `${er}:${ec}`) return dist + 1;
         if (visited.has(pos)) continue;
         visited.add(pos);
         queue.push([dist + 1, pos]);
      }
   }
   return -1;
};

export const step2 = (input: string): number => {
   const [grid, start] = buildGrid(input, 'E');
   const [sr, sc] = start;

   const visited = new Set([`${sr}:${sc}`]);
   const queue: [number, string][] = [[0, `${sr}:${sc}`]];
   const notAdjTest = (num: number) => num < -1;
   while (queue.length) {
      const [dist, vtx] = queue.shift()!;
      const [r, c] = vtx.split(':').map((n) => parseInt(n));
      for (let adj of findAdjacent(grid, r, c, notAdjTest)) {
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
