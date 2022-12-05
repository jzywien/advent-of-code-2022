export type Stack = string[];
export type Move = number[];

const moveStacks = (move: Move, stacks: Stack[], strategy: (stack: Stack) => Stack) => {
   const [num, from, to] = move;
   const moved = strategy(stacks[from - 1].splice(-num));
   stacks[to - 1].push(...moved);
   return stacks;
};

const noOpStrategy = (stack: Stack) => stack;
const reverseStrategy = (stack: Stack) => {
   return stack.reverse();
};

export const step1 = (stacks: Stack[], moves: Move[]): string =>
   moves
      .reduce((stacks, move) => moveStacks(move, stacks, reverseStrategy), [...stacks])
      .reduce((top, stack) => `${top}${stack.pop()}`, '');

export const step2 = (stacks: Stack[], moves: Move[]): string =>
   moves
      .reduce((stacks, move) => moveStacks(move, stacks, noOpStrategy), [...stacks])
      .reduce((top, stack) => `${top}${stack.pop()}`, '');
