import {
  configure, getLogger, koaLogger, addLayout, Logger as LL,
} from 'koa-log4';
import { Context } from 'koa';
import config from 'config';
import Moment from 'moment';

configure(config.get('log4js'));

const test = getLogger('http');

class LoggerClass {
  private static logger: LoggerClass = new LoggerClass();

  httpLogger = getLogger('http');

  constructor() {
    console.log('init');
    if (LoggerClass.logger) {
      throw new Error('Error: Instantiation failed: Use getInstance() instead of new.');
    }
    LoggerClass.logger = this;
  }

  public static getLogger(): LoggerClass {
    return LoggerClass.logger;
  }

  public getHttpLogger = () => this.httpLogger
}

export const Logger = LoggerClass.getLogger();
