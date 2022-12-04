export {};

declare global {
   interface Array<T> {
      sum(): T;
      chunk(chunkSize: number): T[][];
   }
}

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
