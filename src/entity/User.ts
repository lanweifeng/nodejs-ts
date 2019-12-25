import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryColumn({
    comment: '用户登录名（英文和数字）',
    unique: true,
    length: 20,
    nullable: false,
  })
  userId!: number;

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

  @Column('datetime', {
    comment: '创建时间',
  })
  createTime!: string;

  @Column({
    type: 'enum',
    enum: ['0', '1'],
    comment: '用户状态',
    default: '0',
  })
  status!: '0' | '1';
}
