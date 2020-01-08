import { UserVo } from '@vo/user/UserVo';
import { InsertResult } from 'typeorm';

export interface UserService {
  add(user: UserVo): Promise<InsertResult>;
  getUser(userId: string): Promise<any>;
  updateUser(user: UserVo): Promise<any>;
  removeUser(userId: string | string[]): Promise<any>;
}
