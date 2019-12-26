import { JsonController, Get, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { UserEntity } from '@entity/User';
import { UserService } from '@service/user/UserService';

@JsonController('/user')
export default class UserController {
  @Inject('userService')
  private userService!: UserService

  @Get('/register')
  register() {
    const user = new UserEntity();
    user.userId = 1;
    user.userName = 'test';
    user.createTime = '';
    user.passWord = 'xx';
    user.roleId = 0;
    user.status = '0';
    console.log('user', user);
    this.userService.register(user);
  }
}
