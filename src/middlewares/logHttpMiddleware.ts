import { KoaMiddlewareInterface, Middleware } from 'routing-controllers';
import { Context } from 'koa';
import { Logger } from '@utils';

/**
 * http请求参数记录
 * @class
 * @implements {KoaMiddlewareInterface}
 */
@Middleware({ type: 'before', priority: 0 })
export class LogHttpMiddleware implements KoaMiddlewareInterface {
  async use(ctx: Context, next: (err?: any) => Promise<any>): Promise<any> {
    Logger.http(ctx);
    return next();
  }
}
