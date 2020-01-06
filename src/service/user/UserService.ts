import { UserVo } from '@vo/user/UserVo';
import { User } from '@entity/User';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';

export interface UserService {
  add(user: UserVo): Promise<InsertResult>;
  getUser(userId: string): Promise<User[]>;
  updateUser(user: UserVo): Promise<UpdateResult>;
  removeUser(userId: string | string[]): Promise<DeleteResult>;
}
