export type Stack = string[];
export type Move = number[];
export type Game = {
   stacks: Stack[];
   moves: Move[];
};

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

export const step1 = (game: Game): string =>
   game.moves
      .reduce((stacks, move) => moveStacks(move, stacks, reverseStrategy), [...game.stacks])
      .reduce((top, stack) => `${top}${stack.pop()}`, '');

export const step2 = (game: Game): string =>
   game.moves
      .reduce((stacks, move) => moveStacks(move, stacks, noOpStrategy), [...game.stacks])
      .reduce((top, stack) => `${top}${stack.pop()}`, '');
