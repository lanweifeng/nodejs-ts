import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { User } from '@entity/User';
import { UserVo } from '@vo/user/UserVo';
import { UserException } from '@exception/UserException';
import { StatusCode } from '@enum/StatusCode';
import { BaseException } from '@exception/BaseException';
import { UserService } from '../UserService';

@Service('userService')
export default class UserServiceImpl implements UserService {
  private userRepository = getRepository(User)

  /**
   * 根据userId查用户，不传查所有用户
   * @param userId
   */
  async getUser(userId?: string) {
    const users = userId ? await this.userRepository.find({ userId, delFlag: '1' }) : await this.userRepository.find({ delFlag: '1' });
    users.forEach((user) => {
      delete user.passWord;
      delete user.delFlag;
    });
    return users;
  }

  /**
   * 新增用户
   * @param user
   */
  async add(userVo: UserVo) {
    const find = await this.userRepository.findOne({ userId: userVo.userId });
    if (find) {
      throw new UserException(StatusCode.appendMsg(StatusCode.USER_INSERT_REPEAT, userVo.userId));
    }

    const user = new User();
    Object.assign(user, userVo);
    user.hashPassword();
    try {
      return await this.userRepository.insert(user);
    } catch (e) {
      throw new UserException(StatusCode.USER_INSERT_ERROR, e.stack);
    }
  }

  /**
   * 修改用户
   * @param user
   */
  async updateUser(userVo: UserVo) {
    const user = new User();
    Object.assign(user, userVo);
    try {
      await this.userRepository.findOneOrFail({ userId: user.userId, delFlag: '1' });
    } catch (e) {
      throw new BaseException(StatusCode.appendMsg(StatusCode.USER_UPDATE_NOT_USER, userVo.userId));
    }

    try {
      await this.userRepository.update(user.userId, user);
    } catch (e) {
      throw new UserException(StatusCode.USER_UPDATE_ERROR, e);
    }
  }

  /**
   * 根据userId删除用户
   * @param userId
   */
  async removeUser(userId: string[]): Promise<any> {
    try {
      await this.userRepository.update(userId, { delFlag: '0' });
    } catch (e) {
      throw new UserException(StatusCode.USER_DELETE_ERROR, e);
    }
  }
}
