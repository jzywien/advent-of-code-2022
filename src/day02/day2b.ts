export const NumericStrategy = {
   NoOp: (opponent: number, choice: number): number[] => [opponent, choice],
   Result: (opponent: number, result: number): number[] => [opponent, (opponent + result + 2) % 3],
};

export const numericSolution = (data: string[][], strategy = NumericStrategy.NoOp): number =>
   data
      .map(([opponent, result]) => [
         opponent.charCodeAt(0) - 'A'.charCodeAt(0),
         result.charCodeAt(0) - 'X'.charCodeAt(0),
      ])
      .map(([opponent, result]) => strategy(opponent, result))
      .reduce((sum, [opponent, elf]) => {
         sum += elf + 1;
         if (opponent === elf) return sum + 3;
         else if ((opponent + 1) % 3 === elf) return sum + 6;
         return sum;
      }, 0);
