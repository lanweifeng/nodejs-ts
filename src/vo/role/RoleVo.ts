import { IsNotEmpty, IsString, IsEmpty } from 'class-validator';

export class RoleVo {
  /**
   * 角色ID
   */
  roleId!: string

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
