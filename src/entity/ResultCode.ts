export class ResultCode {
  constructor(code: number, msg: string) {
    this.code = code;
    this.msg = msg;
  }

  public code!: number;

  public msg!: string;
}
