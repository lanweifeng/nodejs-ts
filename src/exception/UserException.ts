import { BaseException } from './BaseException';

export class UserException extends BaseException {
  constructor(msg: string, code?: number, e?: Error) {
    super(msg, code, e);
  }
}
