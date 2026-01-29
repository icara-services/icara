import { Shape } from "@ddd-ts/shape";
import { Proportion } from "./proportion";
import { AnalyseId } from "./analyseId";
import { TransactionId } from "../../transaction/domain/transactionId";
import { FraudScore } from "./score";

export class Analyse extends Shape({
  id: AnalyseId,
  transactionId: TransactionId,
  score: FraudScore,
  weights: {
    v2: Proportion,
    v1: Proportion,
    v3: Proportion,
    v4: Proportion,
    v5: Proportion,
    v6: Proportion,
    v7: Proportion,
    v8: Proportion,
    v9: Proportion,
    v10: Proportion,
    v11: Proportion,
    v12: Proportion,
    v13: Proportion,
    v14: Proportion,
    v15: Proportion,
    v16: Proportion,
    v17: Proportion,
    v18: Proportion,
    v19: Proportion,
    v20: Proportion,
    v21: Proportion,
    v22: Proportion,
    v23: Proportion,
    v24: Proportion,
    v25: Proportion,
    v26: Proportion,
    v27: Proportion,
    v28: Proportion,
  },
}) {}
