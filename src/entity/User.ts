import {
  Entity, PrimaryColumn, Column, CreateDateColumn,
} from 'typeorm';

import bcryptjs from 'bcryptjs';

@Entity('user')
export class User {
  @PrimaryColumn({
    comment: '用户登录名（英文和数字）',
    unique: true,
    length: 20,
    nullable: false,
  })
  userId!: string;

  @Column({
    comment: '用户名',
    length: 45,
    nullable: false,
  })
  userName!: string;

  @Column({
    comment: '用户密码',
    length: 45,
    nullable: false,
  })
  passWord!: string;

  @Column('int', {
    comment: '角色ID',
    nullable: false,
  })
  roleId!: number;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createTime!: Date;

  @Column({
    type: 'enum',
    enum: ['0', '1'],
    comment: '用户状态',
    default: '0',
  })
  status!: '0' | '1';

  hashPassword() {
    this.passWord = bcryptjs.hashSync(this.passWord);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcryptjs.compareSync(unencryptedPassword, this.passWord);
  }
}
