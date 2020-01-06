import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { User } from '@entity/User';
import { BaseException } from '@exception/BaseException';
import * as jwt from 'jsonwebtoken';
import config from 'config';
import { PermissionService, LoginUser } from '../PermissionService';

@Service('permissionService')
export default class PermissionServiceImpl implements PermissionService {
  private userRepository = getRepository(User);

  /**
   * 登录
   * @param user
   */
  async login(user: LoginUser): Promise<any> {
    let loginUser: User;
    try {
      loginUser = await this.userRepository.findOneOrFail(user);
    } catch (e) {
      throw new BaseException('用户名或者密码错误');
    }

    if (!loginUser.checkIfUnencryptedPasswordIsValid(user.passWord)) {
      throw new BaseException('用户名或者密码错误');
    }

    // 注册token
    const token = jwt.sign(
      { userId: loginUser.userId, userName: loginUser.userName },
      config.get<string>('jwtSecret'),
      { expiresIn: '1h' },
    );

    return {
      token,
      userId: loginUser.userId,
      username: loginUser.userName,
    };
  }

  /**
   * 登出
   */
  async logout(userId?: string): Promise<any> {
    return undefined;
  }
}
