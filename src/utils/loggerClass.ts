import {
  configure, getLogger, koaLogger, addLayout,
} from 'koa-log4';
import config from 'config';
import { BaseException } from '@exception/BaseException';
import { BadRequestError } from 'routing-controllers';
import { ValidationError } from 'class-validator';
import { Context } from 'koa';

addLayout('test', (config) => function (logEvent): any { return logEvent; });

configure(config.get('log4js'));

class LoggerClass {
  private static logger: LoggerClass = new LoggerClass();

  httpLogger = getLogger('http');

  httpKoaLogger = koaLogger(this.httpLogger);

  consoleLogger = getLogger();

  errorLogger = getLogger('error');

  constructor() {
    if (LoggerClass.logger) {
      this.errorLogger.error('Error: Instantiation failed: Use getInstance() instead of new.');
      throw new Error('Error: Instantiation failed: Use getInstance() instead of new.');
    }
    LoggerClass.logger = this;
  }

  public static getLogger(): LoggerClass {
    return LoggerClass.logger;
  }

  private setBaseInfo = (loggerType: 'httpLogger'|'errorLogger'|'consoleLogger', ctx: Context) => {
    this[loggerType].addContext('ip', ctx.request.ip);
    this[loggerType].addContext('protocol', ctx.request.protocol);
    this[loggerType].addContext('method', ctx.request.method);
    this[loggerType].addContext('url', ctx.request.originalUrl);
    const params = ctx.request.method === 'GET' ? ctx.request.query : ctx.request.body;
    this[loggerType].addContext('params', JSON.stringify(params));
  }

  public clearContext = () => {
    this.httpLogger.clearContext();
    this.errorLogger.clearContext();
    this.consoleLogger.clearContext();
  }

  public error = (e: Error | string, ctx?: Context) => {
    if (ctx) {
      this.setBaseInfo('errorLogger', ctx);
    }
    this.errorLogger.addContext('errors', e);
    if (e instanceof BadRequestError) {
      const badRequestError = e as BadRequestError & {errors: ValidationError[]};
      let msg: string;
      if (badRequestError.name === 'ParamRequiredError') {
        msg = badRequestError.message;
      } else {
        msg = badRequestError.errors.map((paramError) => Object.keys(paramError.constraints).map((condition) => paramError.constraints[condition]).join(', ')).join(', ');
      }
      this.errorLogger.removeContext('errors');
      this.errorLogger.addContext('errors', `请求参数格式错误: ${msg}`);
      this.errorLogger.error(e.stack);
    } else {
      this.errorLogger.error(e);
    }
  }

  public http = (ctx: Context) => {
    this.clearContext();
    this.setBaseInfo('httpLogger', ctx);
  }
}

export const Logger = LoggerClass.getLogger();
