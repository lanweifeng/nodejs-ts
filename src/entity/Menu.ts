import {
  Entity, PrimaryColumn, Column,
} from 'typeorm';

import { BaseContentEntity } from './BaseContentEntity';


@Entity('menu')
export class Menu extends BaseContentEntity {
  @PrimaryColumn({
    comment: 'id 自增',
    name: 'menu_id',
    length: 32,
  })
  menuId!: string;

  @Column({
    comment: '父菜单id',
    name: 'parent_id',
    length: 32,
  })
  parentId!: string;

  @Column({
    comment: '菜单名称',
    length: 32,
    nullable: false,
    name: 'title',
  })
  title!: string;

  @Column({
    comment: '菜单图标',
    length: 128,
    name: 'icon',
  })
  icon!: string

  @Column({
    comment: '菜单地址',
    length: 128,
    name: 'path',
    nullable: false,
  })
  path!: string

  @Column({
    comment: '菜单组件名称',
    length: 32,
    name: 'component',
    nullable: false,
  })
  component!: string
}
