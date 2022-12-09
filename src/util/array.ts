export {};

declare global {
   interface Array<T> {
      sum(): number;
      chunk(chunkSize: number): T[][];
      peek(): T;
   }
}

export const times = (num: number, cb: (ndx: number) => any) => {
   for (let i = 0; i < num; ++i) cb(i);
};

if (!Array.prototype.sum) {
   Array.prototype.sum = function (): number {
      return this.reduce((s, c) => s + c);
   };
}

if (!Array.prototype.chunk) {
   Array.prototype.chunk = function (chunkSize: number): any[][] {
      const chunks = [];
      for (var i = 0; i < this.length; i += chunkSize) {
         chunks.push(this.slice(i, i + chunkSize));
      }
      return chunks;
   };
}

if (!Array.prototype.peek) {
   Array.prototype.peek = function (): any {
      return this.at(-1);
   };
}
