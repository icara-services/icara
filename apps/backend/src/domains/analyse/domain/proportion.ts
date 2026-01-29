import { Primitive } from "@ddd-ts/shape";
import { ApplicationError } from "../../../framework/error/applicationError";
import { Constructor } from "@ddd-ts/types";

export class Proportion extends Primitive(Number) {
  static parse<T extends Proportion>(this: Constructor<T>, candidate: unknown) {
    if (typeof candidate !== "number") {
      throw ApplicationError.malformed(Proportion, "must be a number");
    }

    if (candidate < 0 || candidate > 1) {
      throw ApplicationError.malformed(Proportion, "must be between 0 and 1");
    }

    return new this(candidate);
  }
}
