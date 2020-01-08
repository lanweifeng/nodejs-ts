import {
  JsonController, Get, QueryParam, Post, Body, Param, BodyParam,
} from 'routing-controllers';
import { Inject } from 'typedi';
import { MenuVo } from '@vo/menu/MenuVo';
import { MenuService } from '@service/menu/MenuService';
import { StatusCode } from '@enum/StatusCode';

@JsonController('/menu')
export default class MenuController {
  @Inject('menuService')
  private readonly menuService!: MenuService

  @Post('/add')
  async add(@BodyParam('menuId', { required: true }) menuId: string,
            @BodyParam('path', { required: true }) path: string,
            @BodyParam('title', { required: true }) title: string,
            @BodyParam('component', { required: true }) component: string,
            @BodyParam('icon') icon: string,
            @BodyParam('parentId') parentId: string,
            @Body() menuVo: MenuVo) {
    await this.menuService.addMenu(menuVo);
  }
}
