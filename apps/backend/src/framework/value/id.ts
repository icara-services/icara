import { Primitive } from "@ddd-ts/shape";
import { monotonicFactory } from "ulid";
import { Constructor } from "@ddd-ts/types";
import { ApplicationError } from "../error/applicationError";

const ulid = monotonicFactory();

export function Id<S extends string>(short: S) {
  abstract class Id extends Primitive(String) {
    static short = short;

    static generate<T extends Id>(this: Constructor<T>): T {
      return new this(`${short}_${ulid()}`);
    }

    static parse(candidate: unknown) {
      if (typeof candidate !== "string") {
        throw ApplicationError.malformed(this.name, "must be a string");
      }

      if (!candidate.startsWith(`${short}_`)) {
        throw ApplicationError.malformed(
          this.name,
          `must start with ${short}_`,
        );
      }
    }
  }

  return Id;
}
