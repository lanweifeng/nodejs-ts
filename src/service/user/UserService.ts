import { User } from '@entity/User';
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm';

export interface UserService {
  add(user: User): Promise<InsertResult>;
  getUser(userId: string): Promise<User[]>;
  updateUser(user: User): Promise<UpdateResult>;
  removeUser(userId: string | string[]): Promise<DeleteResult>;
}
