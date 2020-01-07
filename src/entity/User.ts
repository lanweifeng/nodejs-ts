import {
  Entity, PrimaryColumn, Column,
} from 'typeorm';

import bcryptjs from 'bcryptjs';
import { BaseContentEntity } from './BaseContentEntity';


@Entity('user')
export class User extends BaseContentEntity {
  @PrimaryColumn({
    comment: '用户登录名（英文和数字）',
    unique: true,
    length: 32,
    nullable: false,
    name: 'user_id',
  })
  userId!: string;

  @Column({
    comment: '用户名',
    length: 32,
    nullable: false,
    name: 'user_name',
  })
  userName!: string;

  @Column({
    comment: '用户密码',
    length: 128,
    nullable: false,
    name: 'pass_word',
  })
  passWord!: string;

  @Column('int', {
    comment: '角色ID',
    name: 'role_id',
    default: -1,
  })
  roleId!: number;

  @Column({
    comment: '用户状态',
    length: 32,
    default: '0',
  })
  status!: '0' | '1';

  hashPassword() {
    const salt = bcryptjs.genSaltSync(10);
    this.passWord = bcryptjs.hashSync(this.passWord, salt);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcryptjs.compareSync(unencryptedPassword, this.passWord);
  }
}
