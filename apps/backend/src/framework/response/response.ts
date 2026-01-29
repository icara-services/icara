import { ErrorCode, OkCode } from "./code";

export class Response {
  constructor(
    private readonly code: OkCode | ErrorCode,
    private readonly message: string,
    private readonly ok: boolean,
    private readonly data?: unknown,
  ) {}

  static ok(message: string) {
    return new Response(OkCode.OK, message, true);
  }

  serialize() {
    return {
      status: this.code.status,
      code: this.code.code,
      message: this.message,
      ok: this.ok,
      data: this.data,
    };
  }
}
