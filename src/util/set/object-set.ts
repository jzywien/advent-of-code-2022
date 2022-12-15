import { Stringable } from '../string';

export class ObjectSet<T extends Stringable> {
   map: Map<string, T>;

   constructor() {
      this.map = new Map();
   }

   *[Symbol.iterator](): IterableIterator<T> {
      yield* this.map.values();
   }

   add(item: T) {
      this.map.set(item.toString(), item);
   }

   has(item: T) {
      return this.map.has(item.toString());
   }

   values() {
      return this.map.values();
   }

   delete(item: T) {
      return this.map.delete(item.toString());
   }
}
