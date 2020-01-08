import {
  JsonController, Get, QueryParam, Post, Body, Param, BodyParam,
} from 'routing-controllers';
import { Inject } from 'typedi';
import { UserVo } from '@vo/user/UserVo';
import { PermissionService } from '@service/permission/PermissionService';

@JsonController()
export default class PermissionController {
  @Inject('permissionService')
  private readonly PermissionService!: PermissionService

  @Post('/login')
  async login(@Body() user: UserVo,
              @BodyParam('userId', { required: true }) userId: string,
              @BodyParam('passWord', { required: true }) passWord: string) {
    return await this.PermissionService.login(user);
  }

  @Post('/logout')
  get(@BodyParam('userId') userId: string) {
    return this.PermissionService.logout(userId);
  }
}
