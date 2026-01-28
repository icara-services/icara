import { IIdentifiable } from "@ddd-ts/core";

export interface Store<I extends IIdentifiable> {
  save(item: I): Promise<void>;
  load(id: I["id"]): Promise<I | undefined>;
}
