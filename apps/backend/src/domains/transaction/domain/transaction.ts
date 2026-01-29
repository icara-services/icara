import { Shape } from "@ddd-ts/shape";
import { TransactionId } from "./transactionId";

export class Transaction extends Shape({
  id: TransactionId,
  amount: Number,
  at: Number, // TODO: figure what it is
  vectors: {
    v1: Number,
    v2: Number,
    v3: Number,
    v4: Number,
    v5: Number,
    v6: Number,
    v7: Number,
    v8: Number,
    v9: Number,
    v10: Number,
    v11: Number,
    v12: Number,
    v13: Number,
    v14: Number,
    v15: Number,
    v16: Number,
    v17: Number,
    v18: Number,
    v19: Number,
    v20: Number,
    v21: Number,
    v22: Number,
    v23: Number,
    v24: Number,
    v25: Number,
    v26: Number,
    v27: Number,
    v28: Number,
  },
}) {}
