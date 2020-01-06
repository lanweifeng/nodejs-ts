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
  async login(@BodyParam('userId') userId: string, @BodyParam('passWord') passWord: string) {
    const user = new UserVo();
    user.userId = userId;
    user.passWord = passWord;
    await this.PermissionService.login(user);
  }

  @Post('/logout')
  get(@BodyParam('userId') userId: string) {
    return this.PermissionService.logout(userId);
  }
}
