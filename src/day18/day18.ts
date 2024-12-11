import '../util/polyfills';

type Coord3D = [number, number, number];

const stringToCoord = (input: string): Coord3D => input.split(',').map(Number) as Coord3D;

const getNeighbours = (input: Coord3D): Coord3D[] => {
   const offsets = [-1, 1];
   const neighbours: Coord3D[] = [];
   for (let i = 0; i < 3; i++)
      for (const offset of offsets) neighbours.push(input.map((v, j) => (i === j ? v + offset : v)) as Coord3D);
   return neighbours;
};
// Part 1 consists of finding the sides of the indicated drops that are not against another drop
const getExposedSideCount = (input: Coord3D, dropSet: Set<string>): number =>
   getNeighbours(input).filter((coord) => !dropSet.has(coord.join(','))).length;

const makeFullVolume = (input: Coord3D[], dropSet: Set<string>): string[][][] => {
   const max = {
      x: Math.max(...input.map((v) => v[0])),
      y: Math.max(...input.map((v) => v[1])),
      z: Math.max(...input.map((v) => v[2])),
   };
   return Array.from({ length: max.z + 1 }, (_, z) =>
      Array.from({ length: max.y + 1 }, (_, y) =>
         Array.from({ length: max.x + 1 }, (_, x) => (dropSet.has([x, y, z].join(',')) ? '#' : '.'))
      )
   );
};

const floodVolume = (volume: string[][][]): string[][][] => {
   const queue: Coord3D[] = [[0, 0, 0]];
   while (queue.length) {
      const coord = queue.shift()!;
      const [x, y, z] = coord;
      if (!volume[z]?.[y]?.[x] || ['#', '@'].includes(volume[z][y][x])) continue;
      volume[z][y][x] = '@';
      queue.push(...getNeighbours(coord));
   }
   return volume;
};

// Part 2 involves finding the sides that have a path to the outside (not fully enclosed by lavadrops)
const getSidesExposedToWater = (input: string[], dropSet: Set<string>): number => {
   const lavaDrops = input.map(stringToCoord);
   const volume = floodVolume(makeFullVolume(lavaDrops, dropSet));
   const exists = ([x, y, z]: Coord3D): boolean => volume[z]?.[y]?.[x] !== undefined;
   const getExposedSideCount = (coord: Coord3D): number =>
      getNeighbours(coord).filter(([x, y, z]) => !exists([x, y, z]) || volume[z][y][x] === '@').length;
   return lavaDrops.map(getExposedSideCount).reduce((a, b) => a + b);
};

export const step1 = (input: string) => {
   const lines = input.lines();
   const dropSet = new Set(lines);

   return lines
      .map(stringToCoord)
      .map((coord) => getExposedSideCount(coord, dropSet))
      .reduce((a, b) => a + b);
};

export const step2 = (input: string) => {
   const lines = input.lines();
   const dropSet = new Set(lines);
   return getSidesExposedToWater(lines, dropSet);
};
