import { Transaction } from "../../transaction/domain/transaction";
import { Analyse } from "../domain/analyse";

export interface AiAnalyserService {
  analyse(transaction: Transaction): Promise<Analyse>;
}
