import {
  JsonController, Get, QueryParam, Post, Body, Param, BodyParam,
} from 'routing-controllers';
import { Inject } from 'typedi';
import { UserDto } from '@dto/user/UserDto';
import { UserService } from '@service/user/UserService';

@JsonController('/user')
export default class UserController {
  @Inject('userService')
  private readonly userService!: UserService

  @Post('/add')
  async add(@BodyParam('user') user: UserDto) {
    await this.userService.add(user);
  }

  @Get('/get')
  get(@QueryParam('userId') userId: string) {
    return this.userService.getUser(userId);
  }

  @Post('/update')
  update(@Body() user: UserDto) {
    return this.userService.updateUser(user);
  }

  @Post('/delete')
  delete(@Param('userId') userId: string | string[]) {
    console.log(userId);
  }
}
