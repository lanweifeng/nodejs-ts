import {
  JsonController, Get, QueryParam, Post, Body, Param, BodyParam, CurrentUser,
} from 'routing-controllers';
import { Inject } from 'typedi';
import { UserVo } from '@vo/user/UserVo';
import { UserService } from '@service/user/UserService';
import { UserException } from '@exception/UserException';
import { StatusCode } from '@enum/StatusCode';

@JsonController('/user')
export default class UserController {
  @Inject('userService')
  private readonly userService!: UserService

  @Post('/add')
  async add(@BodyParam('user', { required: true }) user: UserVo) {
    if (!user.roleId) {
      throw new UserException(StatusCode.USER_INSERT_NULL_OF_ROLE_ID);
    }
    if (!user.userId) {
      throw new UserException(StatusCode.USER_INSERT_NULL_OF_USER_ID);
    }
    if (!user.userName) {
      throw new UserException(StatusCode.USER_INSERT_NULL_OF_USER_NAME);
    }
    await this.userService.add(user);
  }

  @Get('/get')
  get(@QueryParam('userId') userId: string) {
    return this.userService.getUser(userId);
  }

  @Post('/update')
  update(@Body({ required: true }) user: UserVo, @BodyParam('userId', { required: true }) userId: string) {
    return this.userService.updateUser(user);
  }

  @Post('/delete')
  delete(@BodyParam('userIds', { required: true }) userIds: string[]) {
    return this.userService.removeUser(userIds);
  }
}
