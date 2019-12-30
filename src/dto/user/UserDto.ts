import { IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  /**
   * 用户登录名（英文和数字）
   */
  @IsString()
  userId!: string;

  /**
   *  用户名
   */
  @IsString()
  userName!: string;

  /**
   * 用户密码
   */
  @IsString()
  passWord!: string;

  /**
   * 角色ID
   */
  roleId!: number;

  /**
   * 创建时间
   */
  createTime!: Date;

  /**
   * 用户状态
   */
  status!: '0' | '1';
}
