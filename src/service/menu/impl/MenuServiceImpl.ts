import { Service } from 'typedi';
import { getRepository } from 'typeorm';
import { Menu } from '@entity/Menu';
import { MenuVo } from '@vo/menu/MenuVo';
import { StatusCode } from '@enum/StatusCode';
import { BaseException } from '@exception/BaseException';
import { MenuService } from '../MenuService';

@Service('menuService')
export default class MenuServiceImpl implements MenuService {
  private userRepository = getRepository(Menu)

  async addMenu(menuVo: MenuVo): Promise<any> {
    const menu = new Menu();
    Object.assign(menu, menuVo);
    try {
      return await this.userRepository.insert(menu);
    } catch (e) {
      throw new BaseException(StatusCode.appendMsg(StatusCode.MENU_INSERT_ERROR, menuVo.title), e.stack);
    }
  }
}
