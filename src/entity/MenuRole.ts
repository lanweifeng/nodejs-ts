import {
  Entity, PrimaryColumn, Column, CreateDateColumn, PrimaryGeneratedColumn,
} from 'typeorm';

import { BaseContentEntity } from './BaseContentEntity';


@Entity('menu_role')
export class MenuRole extends BaseContentEntity {
  @PrimaryGeneratedColumn({
    comment: 'id 自增',
    name: 'id',
  })
  id!: number;

  @Column({
    comment: '角色id',
    nullable: false,
    type: 'int',
    name: 'role_id',
  })
  roleId!: number;

  @Column({
    comment: '菜单id',
    name: 'menu_id',
    length: 32,
  })
  menuId!: string;
}
