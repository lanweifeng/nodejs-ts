import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class BaseContentEntity {
  @Column({
    comment: '创建人id',
    name: 'created_by',
    length: 32,
  })
  createdBy!: string;

  @CreateDateColumn({
    comment: '创建时间',
    type: 'datetime',
    name: 'created_time',
  })
  createdTime!: Date;

  @Column({
    comment: '更新人id',
    name: 'update_by',
    length: 32,
  })
  updatedBy!: string;

  @UpdateDateColumn({
    comment: '更新时间',
    type: 'datetime',
    name: 'update_time',
  })
  updateTime!: Date;

  @Column({
    comment: '是否删除,0删除,1正常',
    name: 'del_flag',
    length: 2,
    default: '1',
  })
  delFlag!: string
}
