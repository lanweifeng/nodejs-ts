import { UserEntity } from '@entity/User';


export interface UserService {
  register(user: UserEntity): Promise<UserEntity>;
}
