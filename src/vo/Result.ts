import { BaseException } from '@exception/BaseException';
import { StatusCode } from '@enum/StatusCode';

export class Result {
  public code!: number;

  public msg!: string;

  public data!: any;

  public static success(data?: any): Result {
    const result = new Result();
    result.code = StatusCode.SUCCESS.code;
    result.msg = StatusCode.SUCCESS.msg;
    result.data = data || {};
    return result;
  }

  public static fail(error: BaseException): Result {
    const result = new Result();
    result.code = error.getCode();
    result.msg = error.getMsg();
    result.data = {};
    return result;
  }
}
