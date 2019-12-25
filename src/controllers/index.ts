import {
  Controller,
  Get,
} from 'routing-controllers';

/**
 * 主页控制器
 * @class
 */
@Controller()
export default class IndexController {
  /**
   * 主页
   * @return {string} 返回主页模板html
   */
  @Get('/start')
  getStart() {
    return 'EOS-BASS-NODE 起步！';
  }
}
