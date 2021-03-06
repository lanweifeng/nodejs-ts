import { BaseException, ErrorInfo } from './BaseException';

export class UserException extends BaseException {
  constructor(errorInfo: ErrorInfo, e?: Error) {
    super(errorInfo, e);
  }
}
