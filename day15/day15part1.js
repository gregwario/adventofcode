class DuelingGeneratorsClass {
  constructor(aSeed, bSeed, iterationCount) {
    this.aNext = aSeed;
    this.bNext = bSeed;
    this.iterationCount = iterationCount;
    this.aFactor = 16807;
    this.bFactor = 48271;
    this.divisor = 2147483647;
    this.matchCount = 0;
  }

  isMatch(a, b) {
    let aBin = this.dec2bin(a);
    let bBin = this.dec2bin(b);
    return (
      aBin
        .split("")
        .reverse()
        .join("")
        .substring(0, 16) ===
      bBin
        .split("")
        .reverse()
        .join("")
        .substring(0, 16)
    );
  }

  dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  countMatches() {
    for (let i = 0; i < this.iterationCount; i++) {
      this.aNext = (parseInt(this.aNext) * this.aFactor) % this.divisor;
      this.bNext = (parseInt(this.bNext) * this.bFactor) % this.divisor;
      if (this.isMatch(this.aNext, this.bNext)) {
        this.matchCount++;
      }
    }
  }

  getMatches() {
    return this.matchCount;
  }
}

let generators = new DuelingGeneratorsClass(277, 349, 40000000); // 592
generators.countMatches();
console.log(generators.getMatches());
