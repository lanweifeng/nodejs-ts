import { KoaMiddlewareInterface, Middleware } from 'routing-controllers';
import { Context } from 'koa';
import { Logger } from '@utils';
import { getLogger } from 'koa-log4';

/**
 * http请求参数记录
 * @class
 * @implements {KoaMiddlewareInterface}
 */
@Middleware({ type: 'before', priority: 0 })
export class LogHttpMiddleware implements KoaMiddlewareInterface {
  async use(ctx: Context, next: (err?: any) => Promise<any>): Promise<any> {
    const params = ctx.request.method === 'GET' ? ctx.request.query : ctx.request.body;

    Logger.httpLogger.info('');
    console.log('e')
    // Logger.httpLogger.addContext('params', params);
    return next();
  }
}
