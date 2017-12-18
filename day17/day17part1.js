const input = 316;
const vortex = [0];
let position = 0;
for (let i = 1; i <= 2017; i++) {
  position += input;
  position %= vortex.length || 1;
  position += 1;
  vortex.splice(position, 0, i);
}
console.log(position + 1, vortex[position + 1]);
