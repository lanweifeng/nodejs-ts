import {
  Entity, PrimaryColumn, Column, PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseContentEntity } from './BaseContentEntity';


@Entity('role')
export class Role extends BaseContentEntity {
  @PrimaryGeneratedColumn({
    comment: '角色ID',
    type: 'int',
    name: 'role_id',
  })
  roleId!: number;

  @Column({
    comment: '角色名称',
    length: 32,
    nullable: false,
    name: 'role_name',
  })
  roleName!: string;

  @Column({
    comment: '角色描述',
    length: 1024,
    name: 'role_des',
  })
  roleDes!: string;
}
