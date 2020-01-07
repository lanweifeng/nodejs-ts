import { KoaMiddlewareInterface, Middleware } from 'routing-controllers';
import { Context } from 'koa';
import config from 'config';
import jwt from 'koa-jwt';
import { TokenException } from '@exception/TokenException';
import { StatusCode } from '@enum/StatusCode';

/**
 * 验证jwt
 * @class
 * @implements {KoaMiddlewareInterface}
 */
@Middleware({ type: 'before', priority: 800 })
export class LogHttpMiddleware implements KoaMiddlewareInterface {
  async use(ctx: Context, next: (err?: any) => Promise<any>): Promise<any> {
    // Bearer
    const verifyJwt = jwt(config.get('jwtConfig')).unless({ path: [/^\/login/] });
    try {
      await verifyJwt(ctx, next);
    } catch (e) {
      if (e.status === 401) {
        throw new TokenException(StatusCode.TOKEN_ERROR, e);
      } else {
        throw e;
      }
    }
  }
}
