import { AiAnalyserService } from "../application/aiAnalyser.service";
import { FraudScore } from "../domain/score";
import { Analyse } from "../domain/analyse";
import { AnalyseId } from "../domain/analyseId";
import { Transaction } from "../../transaction/domain/transaction";
import { Proportion } from "../domain/proportion";

export class FakeAiAnalyserService implements AiAnalyserService {
  private fraudScore = new FraudScore(0);

  setFraudScore(value: number) {
    this.fraudScore = FraudScore.parse(value);
  }

  async analyse(transaction: Transaction) {
    return new Analyse({
      id: AnalyseId.generate(),
      transactionId: transaction.id,
      score: this.fraudScore.copy(),
      weights: {
        v2: new Proportion(1 / 28),
        v1: new Proportion(1 / 28),
        v3: new Proportion(1 / 28),
        v4: new Proportion(1 / 28),
        v5: new Proportion(1 / 28),
        v6: new Proportion(1 / 28),
        v7: new Proportion(1 / 28),
        v8: new Proportion(1 / 28),
        v9: new Proportion(1 / 28),
        v10: new Proportion(1 / 28),
        v11: new Proportion(1 / 28),
        v12: new Proportion(1 / 28),
        v13: new Proportion(1 / 28),
        v14: new Proportion(1 / 28),
        v15: new Proportion(1 / 28),
        v16: new Proportion(1 / 28),
        v17: new Proportion(1 / 28),
        v18: new Proportion(1 / 28),
        v19: new Proportion(1 / 28),
        v20: new Proportion(1 / 28),
        v21: new Proportion(1 / 28),
        v22: new Proportion(1 / 28),
        v23: new Proportion(1 / 28),
        v24: new Proportion(1 / 28),
        v25: new Proportion(1 / 28),
        v26: new Proportion(1 / 28),
        v27: new Proportion(1 / 28),
        v28: new Proportion(1 / 28),
      },
    });
  }
}
