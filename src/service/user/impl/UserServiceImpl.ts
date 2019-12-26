import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { UserEntity } from '@entity/User';
import { UserService } from '../UserService';

@Service('userService')
export default class UserServiceImpl implements UserService {
  async register(user: UserEntity) {
    const userRepository = getRepository(UserEntity);
    console.log('注册成功!');
    return await userRepository.save(user);
  }
}
