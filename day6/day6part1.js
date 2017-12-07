// let blocks = [0, 2, 7, 0];
let blocks = `10	3	15	10	5	15	5	15	9	2	5	8	5	2	3	6`.split("\t").map(el => parseInt(el, 10));

Array.prototype.distributeBlocksFrom = function(index) {
  let beans = this[index];
  this[index] = 0;
  while (beans--) {
    index++;
    this[index % this.length]++;
  }
  return this;
};

const cycleCount = blocks => {
  let snapshots = new Set();
  let config = blocks;
  let cycles = 0;
  while (!snapshots.has(config.toString())) {
    cycles++;
    snapshots.add(config.toString());
    let maxValue = Math.max(...config);
    let maxIndex = config.indexOf(maxValue);
    config = blocks.distributeBlocksFrom(maxIndex);
  }
  return cycles;
};

console.log(cycleCount(blocks));
