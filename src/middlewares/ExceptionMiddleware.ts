import {
  KoaMiddlewareInterface, Middleware, Ctx, BadRequestError,
} from 'routing-controllers';
import { BaseException } from '@exception/BaseException';
import { Result } from '@vo/Result';
import { Context } from 'koa';
import { ValidationError } from 'class-validator';
import { Logger } from '@utils';
import { StatusCode } from '@enum/StatusCode';

/**
 * 异常处理中间件
 * @class
 * @implements {KoaMiddlewareInterface}
 */
@Middleware({ type: 'before', priority: 900 })
export class ErrorHandlerMiddleware implements KoaMiddlewareInterface {
  public async use(@Ctx() context: Context, next: (err?: any) => Promise<any>): Promise<any> {
    return await next().catch((e: Error) => {
      Logger.error(e, context);
      if (e instanceof BaseException) {
        context.response.body = Result.fail(e);
      } else if (e instanceof BadRequestError) {
        const badRequestError = e as BadRequestError & {errors: ValidationError[]};
        const badRequestResult = new Result();
        badRequestResult.code = StatusCode.PARAMS_ERROR.code;
        badRequestResult.data = {};
        badRequestResult.msg = StatusCode.PARAMS_ERROR.msg + badRequestError.errors.map((paramError) => Object.keys(paramError.constraints).map((condition) => paramError.constraints[condition]).join(', ')).join(', ');
        context.response.body = badRequestResult;
      } else {
        console.log('error', e);
      }
    });
  }
}
