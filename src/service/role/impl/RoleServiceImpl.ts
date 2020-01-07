import { Service } from 'typedi';
import { getRepository, InsertResult, UpdateResult, DeleteResult } from 'typeorm';
import { Role } from '@entity/Role';
import { BaseException } from '@exception/BaseException';
import { StatusCode } from '@enum/StatusCode';
import { RoleVo } from '@vo/role/RoleVo';
import { RoleService } from '../RoleService';

@Service('roleService')
export default class RoleServiceImpl implements RoleService {
  private roleRepository = getRepository(Role);

  async addRole(roleVo: RoleVo): Promise<InsertResult> {
    const find = await this.roleRepository.findOne({ roleName: roleVo.roleName });
    if (find) {
      throw new BaseException(StatusCode.ROLE_INSERT_REPEAT);
    }

    const role = new Role();
    Object.assign(role, roleVo);
    try {
      return await this.roleRepository.insert(role);
    } catch (e) {
      throw new BaseException(StatusCode.ROLE_INSERT_ERROR, e.stack);
    }
  }

  async getRoleByRoleId(roleId: string): Promise<any> {
    return roleId ? await this.roleRepository.find({ roleId: parseInt(roleId, 0) }) : await this.roleRepository.find();
  }

  async updateRole(roleVo: RoleVo): Promise<UpdateResult> {
    const role = new Role();
    Object.assign(role, roleVo);
    try {
      return await this.roleRepository.update(role.roleId, role);
    } catch (e) {
      throw new BaseException(StatusCode.ROLE_UPDATE_ERROR, e);
    }
  }

  async removeRole(roleId: string | string[]): Promise<DeleteResult> {
    try {
      return await this.roleRepository.delete(roleId);
    } catch (e) {
      throw new BaseException(StatusCode.ROLE_DELETE_ERROR, e);
    }
  }
}
