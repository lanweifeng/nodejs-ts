import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { User } from '@entity/User';
import { UserVo } from '@vo/user/UserVo';
import { UserException } from '@exception/UserException';
import { StatusCode } from '@enum/StatusCode';
import { UserService } from '../UserService';

@Service('userService')
export default class UserServiceImpl implements UserService {
  private userRepository = getRepository(User)

  /**
   * 根据userId查用户，不传查所有用户
   * @param userId
   */
  async getUser(userId?: string) {
    return userId ? await this.userRepository.find({ userId }) : await this.userRepository.find();
  }

  /**
   * 新增用户
   * @param user
   */
  async add(userVo: UserVo) {
    const find = await this.userRepository.findOne({ userId: userVo.userId });
    if (find) {
      throw new UserException(StatusCode.USER_INSERT_REPEAT);
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
  async updateUser(user: UserVo) {
    try {
      return await this.userRepository.update(user.userId, user);
    } catch (e) {
      throw new UserException(StatusCode.USER_UPDATE_ERROR, e);
    }
  }

  /**
   * 根据userId删除用户
   * @param userId
   */
  async removeUser(userId: string | string[]): Promise<any> {
    try {
      return await this.userRepository.delete(userId);
    } catch (e) {
      throw new UserException(StatusCode.USER_DELETE_ERROR, e);
    }
  }
}
