export class Graph {
   adjacencyList: Map<string, Set<string>>;

   constructor() {
      this.adjacencyList = new Map();
   }

   addVertex(v: string) {
      if (!this.adjacencyList.get(v)) {
         this.adjacencyList.set(v, new Set());
      }
   }

   addEdge(src: string, dest: string) {
      if (!this.adjacencyList.get(src)) this.addVertex(src);
      if (!this.adjacencyList.get(dest)) this.addVertex(dest);

      this.adjacencyList.get(src)?.add(dest);
      this.adjacencyList.get(dest)?.add(src);
   }

   removeEdge(src: string, dest: string) {
      this.adjacencyList.get(src)?.delete(dest);
      this.adjacencyList.get(dest)?.delete(src);
   }

   removeVertex(v: string) {
      for (let adjacent of this.adjacencyList.get(v)?.values() || []) {
         this.removeEdge(v, adjacent);
      }
      this.adjacencyList.delete(v);
   }

   bfs(start: string, end: string): number {
      const visited = new Set([start]);
      const queue: [number, string][] = [[0, start]];
      while (queue.length) {
         const [dist, vtx] = queue.shift()!;
         const adjacent = this.adjacencyList.get(vtx) ?? [];
         for (let adj of adjacent) {
            if (visited.has(adj)) continue;
            if (adj === end) return dist + 1;
            visited.add(adj);
            queue.push([dist + 1, adj]);
         }
      }
      return -1;
   }
}
