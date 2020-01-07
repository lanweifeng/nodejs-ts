import {
  JsonController, Get, QueryParam, Post, Body, Param, BodyParam,
} from 'routing-controllers';
import { Inject } from 'typedi';
import { RoleVo } from '@vo/role/RoleVo';
import { RoleService } from '@service/role/RoleService';

@JsonController('/role')
export default class RoleController {
  @Inject('roleService')
  private readonly roleService!: RoleService

  @Post('/add')
  async add(@Body() role: RoleVo) {
    await this.roleService.addRole(role);
  }

  @Get('/get')
  get(@QueryParam('roleId') roleId: string) {
    return this.roleService.getRoleByRoleId(roleId);
  }

  @Post('/update')
  update(@Body() role: RoleVo) {
    return this.roleService.updateRole(role);
  }

  @Post('/delete')
  delete(@Param('roleId') roleId: string | string[]) {
    return this.roleService.removeRole(roleId);
  }
}
