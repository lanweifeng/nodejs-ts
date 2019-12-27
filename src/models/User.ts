export default class UserModel {
  /**
   *用户登录名（英文和数字）
   */
  userId!: number;

  /**
   * 用户名
   */
  userName!: string;

  /**
   * 用户密码
   */
  passWord!: string;

  /**
   * 角色ID
   */
  roleId!: number;

  /**
   * 创建时间
   */
  createTime!: string;

  /**
   * 用户状态
   */
  status!: '0' | '1';
}
