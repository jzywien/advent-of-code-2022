export {};

declare global {
  interface Array<T> {
    sum(): T;
  }
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function () {
    return this.reduce((s, c) => s + c, 0);
  };
}
