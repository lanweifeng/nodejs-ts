import { BaseException } from '@exception';
import { ResultCode } from './ResultCode';
import { StatusCode } from '../enum/StatusCode';

export class Result {
  public code!: number;

  public msg!: string;

  public data!: any;

  public Result(resultCode: ResultCode, data: object | number | string | undefined | null): void {
    this.code = resultCode.code;
    this.msg = resultCode.msg;
    this.data = data;
  }

  public static success(data?: any): Result {
    const result = new Result();
    result.code = StatusCode.SUCCESS.code;
    result.msg = StatusCode.SUCCESS.msg;
    result.data = data || null;
    return result;
  }

  public static fail(error: BaseException): Result {
    const result = new Result();
    result.code = error.getCode();
    result.msg = error.getMsg();
    result.data = null;
    return result;
  }
}
