import {
  Entity, PrimaryColumn, Column, CreateDateColumn, PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseContentEntity } from './BaseContentEntity';


@Entity('log')
export class User extends BaseContentEntity {
  @PrimaryGeneratedColumn({
    comment: 'id 自增',
    name: 'log_id',
  })
  logId!: number;

  @Column({
    comment: '用户id',
    length: 32,
    nullable: false,
    name: 'user_id',
  })
  userId!: string;

  @Column({
    comment: '菜单id',
    name: 'menu_id',
  })
  menuId!: number;

  @Column({
    comment: '操作源ip',
    length: 32,
    name: 'opera_ip',
  })
  operaIp!: string;

  @Column({
    comment: '明细',
    length: 1024,
  })
  detail!: string
}
