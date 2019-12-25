import { JsonController, Get, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { UserEntity } from '@eneity/User';
import { IUserService } from '../../service/user/User.interface';

@JsonController('/user')
export default class UserController {
  @Inject('userService')
  private userService!: IUserService

  @Get('/register')
  register() {
    /* const user = new UserEntity();
    user.userId = 1;
    user.userName = 'test';
    user.createTime = '';
    user.passWord = 'xx';
    user.roleId = 0;
    user.status = '0';
    console.log('user', user);*/
    this.userService.register();
  }
}
