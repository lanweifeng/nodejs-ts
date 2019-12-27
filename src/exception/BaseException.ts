
export class BaseException extends Error {
  private code = 500;

  private msg!: string;

  private e!: Error;

  constructor(msg: string, code?: number, e?: Error) {
    super(msg);
    this.msg = msg;
    if (code) {
      this.code = code;
    }
    if (e !== undefined) {
      this.e = e;
    }
  }

  public setMsg(msg: string): void {
    this.msg = msg;
  }

  public getMsg(): string {
    return this.msg;
  }

  public setCode(code: number): void {
    this.code = code;
  }

  public getCode(): number {
    return this.code;
  }

  public setE(e: Error): void{
    this.e = e;
  }

  public getE(): Error {
    return this.e;
  }


}
