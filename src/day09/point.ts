export class Point {
   x: number = 0;
   y: number = 0;

   step(dir: [number, number]) {
      const [x, y] = dir;
      this.x += x;
      this.y += y;
   }

   follow(p: Point): void {
      const d = Math.max(Math.abs(this.x - p.x), Math.abs(this.y - p.y));
      if (d > 1) {
         const [dx, dy] = [p.x - this.x, p.y - this.y];
         this.x += Math.abs(dx) === 2 ? dx / 2 : dx;
         this.y += Math.abs(dy) === 2 ? dy / 2 : dy;
      }
   }

   toString() {
      return `${this.x}:${this.y}`;
   }
}
