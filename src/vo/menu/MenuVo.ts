import { IsString, IsNumberString, Length } from 'class-validator';

export class MenuVo {
  @IsString()
  @IsNumberString()
  @Length(6, 6)
  menuId!: string;

  @IsString()
  @IsNumberString()
  @Length(6, 6)
  parentId!: string;

  /**
   * 菜单名称
   */
  @IsString()
  title!: string;

  /**
   * 菜单图标
   */
  @IsString()
  icon!: string

  /**
   * 菜单地址
   */
  @IsString()
  path!: string

  /**
   * 菜单组件名称
   */
  @IsString()
  component!: string
}
