export class BaseVO<T> {
  /**
   * 信息
   */
  msg?: string;

  /**
   * 返回的数据
   */
  data?: T;

  /**
   * 返回状态码
   */
  code!: number;

}
