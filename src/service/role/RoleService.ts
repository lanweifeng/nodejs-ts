import { RoleVo } from '@vo/role/RoleVo';
import { Role } from '@entity/Role';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';

export interface RoleService {
  /**
   * 新增角色
   * @param roleVo
   */
  addRole(roleVo: RoleVo): Promise<InsertResult>;

  /**
   * 根据角色ID获取角色信息，不填查所有
   * @param roleId
   */
  getRoleByRoleId(roleId: number): Promise<any>;

  /**
   * 修改角色信息
   * @param roleVo
   */
  updateRole(roleVo: RoleVo): Promise<UpdateResult>;

  /**
   * 删除角色
   * @param roleId
   */
  removeRole(roleId: string | string[]): Promise<DeleteResult>;
}
