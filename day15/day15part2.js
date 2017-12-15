class DuelingGeneratorsClass {
  constructor(aSeed, bSeed, iterationCount) {
    this.aNext = aSeed;
    this.bNext = bSeed;
    this.aPicky = 4;
    this.bPicky = 8;
    this.iterationCount = iterationCount;
    this.aFactor = 16807;
    this.bFactor = 48271;
    this.divisor = 2147483647;
    this.matchCount = 0;
  }

  isValidAndMatches(a, b) {
    let aBin = this.dec2bin(a);
    let bBin = this.dec2bin(b);
    if (this.aNext % this.aPicky !== 0 || this.bNext % this.bPicky !== 0) {
      return false;
    }
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
      if (this.isValidAndMatches(this.aNext, this.bNext)) {
        this.matchCount++;
      }
    }
  }

  getMatches() {
    return this.matchCount;
  }
}

let generators = new DuelingGeneratorsClass(277, 349, 5000000);
generators.countMatches();
console.log(generators.getMatches());
