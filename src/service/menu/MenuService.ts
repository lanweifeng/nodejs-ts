import { MenuVo } from '@vo/menu/MenuVo';

export interface MenuService {
  addMenu(menu: MenuVo): Promise<any>;
}
