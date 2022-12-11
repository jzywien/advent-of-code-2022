import { times } from '../util/array';
import { Monkey } from './monkey';
import { lcm } from '../util/math';

function evalWithContext(item: number, fnStr: string) {
   let old = item;
   return eval(fnStr);
}

const calculateMonkeyBiz = (monkeys: Monkey[]): number =>
   monkeys
      .map((monkey) => monkey.inspections)
      .sort((a, b) => b - a)
      .slice(0, 2)
      .reduce((monkeyBiz, val) => monkeyBiz * val);

export const step1 = (data: [number, Monkey][]): number => {
   const copy: Map<number, Monkey> = new Map(JSON.parse(JSON.stringify(data)));
   const monkeys = [...copy.values()];

   times(20, () => {
      monkeys.forEach((monkey) => {
         monkey.inspections += monkey.items.length;
         monkey.items.forEach((item) => {
            let worry = evalWithContext(item, monkey.operation);
            worry = Math.floor(worry / 3);
            const toMonkey = worry % monkey.modulo === 0 ? monkey.testTrue : monkey.testFalse;
            copy.get(toMonkey)?.items.push(worry);
         });
         monkey.items = [];
      });
   });

   return calculateMonkeyBiz(monkeys);
};

export const step2 = (data: [number, Monkey][]): number => {
   const copy: Map<number, Monkey> = new Map(JSON.parse(JSON.stringify(data)));

   const monkeys = [...copy.values()];
   const modulo = monkeys.map((monkey) => monkey.modulo).reduce(lcm);

   times(10000, () => {
      monkeys.forEach((monkey) => {
         monkey.inspections += monkey.items.length;
         monkey.items.forEach((item) => {
            const worry = evalWithContext(item, monkey.operation) % modulo;
            const toMonkey = worry % monkey.modulo === 0 ? monkey.testTrue : monkey.testFalse;
            copy.get(toMonkey)?.items.push(worry);
         });
         monkey.items = [];
      });
   });

   return calculateMonkeyBiz(monkeys);
};
