import { Proportion } from "./proportion";

export class FraudScore extends Proportion {
  shouldAbortTransaction(limit: FraudScore) {
    return this.value > limit.value;
  }

  copy() {
    return new FraudScore(this.value);
  }
}
