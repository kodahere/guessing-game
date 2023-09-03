class GuessingGame {
    constructor() {
      // this.numb;
      // this.min;
      // this.max;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.numb = Math.ceil((this.max - this.min) / 2) + this.min;
      return this.numb;
    }

    lower() {
      this.max = this.numb;
    }

    greater() {
      this.min = this.numb;
    }
}

module.exports = GuessingGame;
