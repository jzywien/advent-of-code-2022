import { Monkey } from './monkey';

export const sample: [number, Monkey][] = [
   [
      0,
      {
         items: [79, 98],
         inspections: 0,
         operation: 'old * 19',
         modulo: 23,
         testTrue: 2,
         testFalse: 3,
      },
   ],
   [
      1,
      {
         items: [54, 65, 75, 74],
         inspections: 0,
         operation: 'old + 6',
         modulo: 19,
         testTrue: 2,
         testFalse: 0,
      },
   ],
   [
      2,
      {
         items: [79, 60, 97],
         inspections: 0,
         operation: 'old * old',
         modulo: 13,
         testTrue: 1,
         testFalse: 3,
      },
   ],
   [
      3,
      {
         items: [74],
         inspections: 0,
         operation: 'old + 3',
         modulo: 17,
         testTrue: 0,
         testFalse: 1,
      },
   ],
];

export const input: [number, Monkey][] = [
   [
      0,
      {
         items: [62, 92, 50, 63, 62, 93, 73, 50],
         inspections: 0,
         operation: 'old * 7',
         modulo: 2,
         testTrue: 7,
         testFalse: 1,
      },
   ],
   [
      1,
      {
         items: [51, 97, 74, 84, 99],
         inspections: 0,
         operation: 'old + 3',
         modulo: 7,
         testTrue: 2,
         testFalse: 4,
      },
   ],
   [
      2,
      {
         items: [98, 86, 62, 76, 51, 81, 95],
         inspections: 0,
         operation: 'old + 4',
         modulo: 13,
         testTrue: 5,
         testFalse: 4,
      },
   ],
   [
      3,
      {
         items: [53, 95, 50, 85, 83, 72],
         inspections: 0,
         operation: 'old + 5',
         modulo: 19,
         testTrue: 6,
         testFalse: 0,
      },
   ],
   [
      4,
      {
         items: [59, 60, 63, 71],
         inspections: 0,
         operation: 'old * 5',
         modulo: 11,
         testTrue: 5,
         testFalse: 3,
      },
   ],
   [
      5,
      {
         items: [92, 65],
         inspections: 0,
         operation: 'old * old',
         modulo: 5,
         testTrue: 6,
         testFalse: 3,
      },
   ],
   [
      6,
      {
         items: [78],
         inspections: 0,
         operation: 'old + 8',
         modulo: 3,
         testTrue: 0,
         testFalse: 7,
      },
   ],
   [
      7,
      {
         items: [84, 93, 54],
         inspections: 0,
         operation: 'old + 1',
         modulo: 17,
         testTrue: 2,
         testFalse: 1,
      },
   ],
];
