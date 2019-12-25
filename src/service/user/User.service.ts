import { Service } from 'typedi';
import { UserEntity } from '@eneity/User';
import { getRepository } from 'typeorm';
import { IUserService } from './User.interface';

@Service('userService')
export default class UserService implements IUserService {
  async register(): Promise<null> {
    // const userRepository = getRepository(UserEntity);
    // return await userRepository.save();
    console.log('注册成功!');
    return null;
  }
}
