import { Interceptor, InterceptorInterface, Action } from 'routing-controllers';
import { Result } from '@vo/Result';

@Interceptor()
export class ResultInterceprot implements InterceptorInterface {
  intercept(action: Action, data: any) {
    const result = Result.success(data || {});
    return result;
  }
}
