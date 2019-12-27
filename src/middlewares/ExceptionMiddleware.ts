import { KoaMiddlewareInterface, Middleware, Ctx } from 'routing-controllers';
import { BaseException } from '@exception';
import { Context } from 'koa';

/**
 * 异常处理中间件
 * @class
 * @implements {KoaMiddlewareInterface}
 */
@Middleware({ type: 'before', priority: 0 })
export class ErrorHandlerMiddleware implements KoaMiddlewareInterface {
  public async use(@Ctx() context: Context, next: (err?: any) => Promise<any>): Promise<any> {
    return await next().catch((e: Error) => {
      if (e instanceof BaseException) {
        context.response.body = e;
      } else {
        console.log(e);
      }
    });
  }
}
