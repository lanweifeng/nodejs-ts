import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class RoleVo {
  /**
   * 角色ID
   */
  @IsNumber()
  roleId!: number

  /**
   *  角色名称
   */
  @IsString()
  @IsNotEmpty()
  roleName!: string;

  /**
   * 角色描述
   */
  @IsString()
  roleDes!: string;
}
