/*
day 3, part 2

another tough problem... i'll try again brute force, adding more example data and looking for some patterns

my input: 361527

after getting to a 5x5 grid, i don't see any pattern, but it looks like each corner is more than twice the previous corner: 

147		142		133		122		59
304		5		4		2		57
330		10		1		1		54
351		11		23		25		26
362		747		806		880		931

e.g. 1, 2, 5, 11, 26, 59, 147, 362, etc...

that means i can continue to compute the values manually, and i will only need to continue to a log(n) number of corners.  this implies an upper bound on the number of corners of log(361527), or 18.46374387075.  i will still have to do the computations between each corner but if i'm only going to the 18th corner, that means i won't have larger than a 9x9 grid.  9+9+8+8+...+2+2+1+1 = 2 * ∑i, from i = 1 to 9.  not great, but not bad.  

i have things i need to get done today, but there's something alluring about doing a bunch of easy additions to solve this puzzle.  so here's the rest of the square:

363010	349975	330785	312453	295229	279138	266330	130654
6591	6444	6155	5733	5336	5022	2450	128204
13486	147		142		133		122		59		2391	123363
14267	304		5		4		2		57		2275	116247
15252	330		10		1		1		54		2105	109476
16295	351		11		23		25		26		1968	103128
17008	362		747		806		880		931		957		98098
17370	35487	37402	39835	42452	45220	47108	48065

the first square greater than my input is 363010.  64 computations (almost 15 "corners").

*/