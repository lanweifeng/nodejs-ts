import {
  JsonController, Get, QueryParam, Post, Body, Param, BodyParam,
} from 'routing-controllers';
import { Inject } from 'typedi';
import { UserVo } from '@vo/user/UserVo';
import { UserService } from '@service/user/UserService';

@JsonController('/user')
export default class UserController {
  @Inject('userService')
  private readonly userService!: UserService

  @Post('/add')
  async add(@BodyParam('user', { required: true }) user: UserVo) {
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
  delete(@Param('userId') userId: string | string[]) {
    console.log(userId);
  }
}
