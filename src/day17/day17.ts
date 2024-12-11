/**
 * --- Day 17: Pyroclastic Flow ---
 * Part 1: 01:08:33   1660
 * Part 2: 02:03:10   1197
 * This challenge is kind of tetris-esque. Just stacking some blocks
 */
type Coord = [number, number];

// The input consists of jet streams that push the block left and right
const generateJet = (jets: string, index: number) => jets[index % jets.length];

// This contains arrays of the different block types (I just hand coded them). horizontal line, vertical line, +, L, etc
const blockTypes: Coord[][] = [
   [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
   ],
   [
      [1, 0],
      [0, -1],
      [1, -1],
      [2, -1],
      [1, -2],
   ],
   [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, -1],
      [2, -2],
   ],
   [
      [0, 0],
      [0, -1],
      [0, -2],
      [0, -3],
   ],
   [
      [0, 0],
      [1, 0],
      [0, -1],
      [1, -1],
   ],
];
const generateBlock = (index: number) => JSON.parse(JSON.stringify(blockTypes[index % blockTypes.length])) as Coord[];

const findTowerTop = (tower: string[][]): number =>
   tower.findIndex((row) => row.some((cell) => ['-', '#'].includes(cell)));

const positionBlock = (block: Coord[]) => block.map(([x, y]) => [x + 2, y] as Coord);

const canMoveRight = (block: Coord[], tower: string[][]) =>
   block.every(([x, y]) => x !== 6 && (y < 0 || tower[y][x + 1] === '.'));

const moveRight = (block: Coord[], tower: string[][]) =>
   canMoveRight(block, tower) ? block.map(([x, y]) => [x + 1, y] as Coord) : block;

const canMoveLeft = (block: Coord[], tower: string[][]) =>
   block.every(([x, y]) => x !== 0 && (y < 0 || tower[y][x - 1] === '.'));

const moveLeft = (block: Coord[], tower: string[][]) =>
   canMoveLeft(block, tower) ? block.map(([x, y]) => [x - 1, y] as Coord) : block;

const moveDown = (block: Coord[]) => block.map(([x, y]) => [x, y + 1] as Coord);

const canMoveDown = (block: Coord[], tower: string[][]) => block.every(([x, y]) => y < 0 || tower[y + 1][x] === '.');

const simulateTetris = (jets: string, rounds: number) => {
   const initialRounds = rounds;
   // Tower starts with a floor and the space is 7 blocks wide
   const tower = [Array.from({ length: 7 }, () => '-')];
   let blockIndex = 0;
   let jetIndex = 0;
   let towerHeight = 0;
   const getTowerHeight = () => towerHeight + tower.length - findTowerTop(tower) - 1;

   // A memo is used for lookahead
   const loopMemo: Record<
      string,
      {
         lastHeight: number;
         heightDifference?: number;
         lastRounds: number;
         roundDifference?: number;
      }
   > = {};
   const generateKey = () =>
      `${blockIndex % blockTypes.length}-${jetIndex % jets.length}-${tower
         .slice(0, 100)
         .map((row) => row.join(''))
         .join('')}`;

   // We check if the current circumstances have happened before
   const getMemo = (roundsLeft: number) => {
      if (getTowerHeight() < 100) return null;
      const key = generateKey();
      if (!loopMemo[key]) {
         loopMemo[key] = {
            lastHeight: getTowerHeight(),
            lastRounds: initialRounds - roundsLeft,
         };
         return null;
      }
      // If they have happened before we use the prior data or calculate new ones
      const loop = loopMemo[key];
      if (loop.heightDifference && loop.roundDifference) return [loop.heightDifference, loop.roundDifference];
      loop.heightDifference = getTowerHeight() - loop.lastHeight;
      loop.roundDifference = initialRounds - roundsLeft - loop.lastRounds;
      return [loop.heightDifference, loop.roundDifference];
   };
   while (rounds--) {
      const towerTop = findTowerTop(tower);
      const looped = getMemo(rounds);
      if (looped && rounds >= looped[1]) {
         const loopsLeft = Math.floor(rounds / looped[1]);
         rounds -= loopsLeft * looped[1];
         towerHeight += loopsLeft * looped[0];
         rounds += 1;
         continue;
      }
      // Creates space above the tower for the new block to fall through
      tower.unshift(...Array.from({ length: 4 - towerTop }, () => Array.from({ length: 7 }, () => '.')));
      let nextBlock = positionBlock(generateBlock(blockIndex++));

      let canFall = true;
      while (canFall) {
         const nextJet = generateJet(jets, jetIndex++);
         nextBlock = (nextJet === '>' ? moveRight : moveLeft)(nextBlock, tower);
         canFall = canMoveDown(nextBlock, tower);
         if (canFall) nextBlock = moveDown(nextBlock);
      }
      nextBlock.forEach(([x, y]) => (tower[y][x] = '#'));
   }

   return getTowerHeight();
};

export const step1 = (input: string) => simulateTetris(input, 2022);
export const step2 = (input: string) => simulateTetris(input, 1_000_000_000_000);
