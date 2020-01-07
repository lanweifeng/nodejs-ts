import { BaseException, ErrorInfo } from './BaseException';

export class TokenException extends BaseException {
  constructor(errorInfo: ErrorInfo, e?: Error) {
    super(errorInfo, e);
  }
}
