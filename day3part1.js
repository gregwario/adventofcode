const input = 361527;

/*

17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ...

tough problem... i am go brute force, add more inputs and look for some patterns
65  64  63  62  61  60  59  58  57
66  37  36  35  34  33  32  31  56
67  38  17  16  15  14  13  30  55
68  39  18   5   4   3  12  29  54
69  40  19   6   1   2  11  28  53
70  41  20   7   8   9  10  27  52
71  42  21  22  23  24  25  26  51
72  43  44  45  46  47  48  49  50
73  74  75  76  77  78  79  80  81

- from the center to the bottom right, along the diagonal are odd squares 1^2, 3^2, 5^2, 7^2, etc. (only odds)
- the square size when getting to each corner is root x root (3x3, 5x5, 7x7, etc)
- from 1 above center to the top left, along the diagonal are even squares 2^2, 4^2, 6^2, 8^2, etc.
- the top left corner is 1 + the even square: 2^2+1, 4^2+1, 6^2+1, 8^2+1, etc.

so using this, i can calculate how far from an even or odd square the number is, and then figure out how far from center the input will be.  
*/

const exactRoot = Math.sqrt(input); // 601.2711534740379
const closestRoot = Math.round(exactRoot); // 601
const distanceToRoot = input % closestRoot; // 326

console.log(`exactRoot: ${exactRoot}`);
console.log(`closestRoot: ${closestRoot}`);
console.log(`distanceToRoot: ${distanceToRoot}`);

// step 361527 will be 326 steps above the 601^2 bottom right corner.
// we can consider a cartesian grid that goes from 0 to 600 (601 positions) on each axis.
// cartesian coordinates for this position are (600, 326)
// cartesian coordinates for the center are currently (300, 300)
// manhattan distance will be: Δ(x1, x2) + Δ(y1, y2)
// (600 - 300) + (326 - 300) = 326