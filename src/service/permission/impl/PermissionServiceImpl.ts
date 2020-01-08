import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { User } from '@entity/User';
import { BaseException } from '@exception/BaseException';
import * as jwt from 'jsonwebtoken';
import config from 'config';
import { UserVo } from '@vo/user/UserVo';
import { StatusCode } from '@enum/StatusCode';
import { PermissionService } from '../PermissionService';

@Service('permissionService')
export default class PermissionServiceImpl implements PermissionService {
  private userRepository = getRepository(User);

  /**
   * 登录
   * @param user
   */
  async login(user: UserVo): Promise<any> {
    let loginUser: User;

    try {
      loginUser = await this.userRepository.findOneOrFail({ userId: user.userId, delFlag: '1' });
    } catch (e) {
      throw new BaseException(StatusCode.LOGIN_ERROR);
    }

    if (!loginUser.checkIfUnencryptedPasswordIsValid(user.passWord)) {
      throw new BaseException(StatusCode.LOGIN_ERROR);
    }

    // 注册token
    const token = jwt.sign(
      { userId: loginUser.userId, userName: loginUser.userName },
      config.get<string>('jwtConfig.secret'),
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
