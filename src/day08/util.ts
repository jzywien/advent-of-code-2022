export const Direction = {
   Up: [0, -1],
   Down: [0, 1],
   Left: [-1, 0],
   Right: [1, 0],
};

export const buildGrid = (lines: string[]): number[][] => lines.map((line) => line.split('').map((c) => parseInt(c)));
