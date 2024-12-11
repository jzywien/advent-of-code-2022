import '../util/polyfills';

let valveMap: Record<string, any>;
let allValves: string[];
let pathCosts: any;

const initialize = (input: string) => {
   valveMap = Object.fromEntries(
      input
         .split('\n')
         .filter(Boolean)
         .map((line) => {
            const [valve, tunnels] = line.split(';');
            const label = valve.match(/([A-Z]{2})/)?.[1] ?? 'broken';
            const flowRate = Number(valve.match(/(\d+)/)?.[1] ?? 0);
            const tunnelConnections = Array.from(tunnels.matchAll(/([A-Z]{2})/g)).map((match) => match[1]);
            return [label, { flowRate, tunnelConnections }] as const;
         })
   );

   allValves = Object.entries(valveMap)
      .map(([valve, { flowRate }]) => (flowRate > 0 ? valve : null))
      .filter(Boolean) as string[];

   pathCosts = Object.fromEntries(
      ['AA', ...allValves].map((start) => [
         start,
         Object.fromEntries(allValves.filter((end) => end !== start).map((end) => [end, getLowestCost(start, end)])),
      ])
   );
};

const getLowestCost = (start: string, end: string) => {
   const queue: { room: string; cost: number; visited: string[] }[] = [{ room: start, cost: 0, visited: [start] }];
   while (queue.length) {
      const { room, cost, visited } = queue.shift()!;
      if (room === end) return cost;
      const { tunnelConnections } = valveMap[room];
      if (tunnelConnections.includes(end)) return cost + 1;
      tunnelConnections.forEach((tunnel: any) => {
         if (!visited.includes(tunnel))
            queue.push({
               room: tunnel,
               cost: cost + 1,
               visited: [...visited, tunnel],
            });
      });
   }
   return -1;
};

const makeAllPaths = (time: number) => {
   const pathList: Set<string> = new Set();
   const getRemainingPath = (steps: string[], left: string[], costThusFar: number): void => {
      const last = steps[steps.length - 1];
      if (!left.length) pathList.add(steps.join('-'));
      return left.forEach((next) => {
         const cost = pathCosts[last][next];
         if (cost + 1 + costThusFar >= time) return pathList.add(steps.join('-'));
         return getRemainingPath(
            [...steps, next],
            left.filter((pos) => pos !== next),
            costThusFar + cost + 1
         );
      });
   };
   getRemainingPath(['AA'], [...allValves], 0);
   return [...pathList].map((path) => path.split('-'));
};

const scorePath = (
   opened: string[],
   path: string[],
   timeLeft: number,
   memo: Map<string, number> = new Map()
): number => {
   const flowForStep = opened[0] === 'AA' ? 0 : valveMap[opened[0]].flowRate * timeLeft;
   if (!path.length) return flowForStep;

   const nextStep = path[0];
   const remainingSteps = path.slice(1);
   const nextStepCost = pathCosts[opened[0]][nextStep];
   const memoKey = `${remainingSteps.join('-')}-${timeLeft - 1 - nextStepCost}`;
   const pressureReleased = scorePath([path[0], ...opened], remainingSteps, timeLeft - nextStepCost - 1, memo);
   memo.set(memoKey, pressureReleased);
   return pressureReleased + flowForStep;
};

const scorePaths = (paths: string[][], time: number) => {
   return paths
      .map((path) => [path, scorePath([path[0]], path.slice(1), time)] as [string[], number])
      .sort(([_, valA], [__, valB]) => valB - valA);
};

const getBestCombo = () => {
   const pathScores = scorePaths(makeAllPaths(26), 26);
   const candidates = pathScores
      .filter(([_, score]) => score > 0)
      .map(([path, score]) => [path.slice(1), score] as [string[], number]);
   const bestCombo = candidates.reduce((best, [path, score], i) => {
      if (score < ((best / 2) | 0)) return best;
      const splitPoint =
         best === 0 ? undefined : Math.max(0, candidates.findIndex((candidate) => candidate[1] + score < best) + 1 - i);

      const noOverlap = candidates
         .slice(i, splitPoint)
         .find((helper) => helper[0].every((valve) => !path.includes(valve)));
      if (!noOverlap) return best;
      return Math.max(best, noOverlap[1] + score);
   }, 0);
   return bestCombo;
};

export const step1 = (input: string): number => {
   initialize(input);
   return scorePaths(makeAllPaths(30), 30)[0][1];
};

export const step2 = (input: string) => {
   initialize(input);
   return getBestCombo();
};
