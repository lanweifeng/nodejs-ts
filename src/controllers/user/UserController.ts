import {
  JsonController, Get, QueryParam, Post, Body, Param,
} from 'routing-controllers';
import { Inject } from 'typedi';
import { User } from '@entity/User';
import { UserService } from '@service/user/UserService';
import { UserException } from '@exception';

@JsonController('/user')
export default class UserController {
  @Inject('userService')
  private userService!: UserService

  @Post('/add')
  async add(@Body() user: User) {
    console.log('user', user);
    await this.userService.add(user);
  }

  @Get('/get')
  get(@QueryParam('userId') userId: string) {
    return this.userService.getUser(userId);
  }

  @Post('/update')
  update(@Body() user: User) {
    return this.userService.updateUser(user);
  }

  @Post('/delete')
  delete(@Param('userId') userId: string | string[]) {
    console.log(userId);
  }
}
