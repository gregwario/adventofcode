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
  let snapshots = {};
  let config = blocks;
  let supercycles = 0;
  while (
    snapshots[config.toString()] === undefined ||
    snapshots[config.toString()] < 1
  ) {
    if (snapshots[config.toString()] === 0) {
      snapshots[config.toString()]++;
      supercycles++;
    } else {
      snapshots[config.toString()] = 0;
    }
    let maxValue = Math.max(...config);
    let maxIndex = config.indexOf(maxValue);
    config = blocks.distributeBlocksFrom(maxIndex);
  }
  return supercycles;
};

console.log(cycleCount(blocks));
