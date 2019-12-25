import { UserEntity } from '@eneity/User';


export interface IUserService {
  // register(user: UserEntity): Promise<UserEntity>
  register(): Promise<null>
}
