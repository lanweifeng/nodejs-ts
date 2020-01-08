
/**
 * 错误码共6位, 除了000000外其他全是操作失败!
 *   ┌─1──┬─2──3─┬─4──5──6┐
 *   │预留│ 模块 │  错误码 │
 *   └─1──┴─2──3─┴─4──5──6┘
 *
 *   第1位：预留
 *   第2、3位：2位模块名
 *   第4位：类别，可按业务分类、接口分类等划分 0-9
 *      0：预留
 *      1：查询
 *      2：新增
 *      3：修改
 *      4：删除
 *   第5、6位：顺序位 01-99
 */

export class StatusCode {
  private static StatusCode() {
    return null;
  }

  /* ***************************系统部分开始**************************************/
  static SUCCESS = {
    code: '000000',
    msg: '操作成功!',
  }

  static TOKEN_ERROR = {
    code: '001001',
    msg: '没有令牌或者令牌无效!',
  }

  static LOGIN_ERROR = {
    code: '001002',
    msg: '用户名或者密码错误!',
  }

  static PARAMS_ERROR = {
    code: '001003',
    msg: '参数格式错误!',
  }
  /* ***************************系统部分结束**************************************/

  /* ***************************用户部分开始**************************************/

  static USER_QUERY_ERROR = {
    code: '002101',
    msg: '用户*查询失败!',
  }

  static USER_INSERT_ERROR = {
    code: '002201',
    msg: '用户插入失败!',
  }

  static USER_INSERT_REPEAT = {
    code: '002202',
    msg: '用户插入失败，用户*已存在!',
  }

  static USER_INSERT_NULL_OF_ROLE_ID = {
    code: '002203',
    msg: '用户新增失败，roleId不能为空!',
  }

  static USER_INSERT_NULL_OF_USER_ID = {
    code: '002204',
    msg: '用户插入失败，userId不能为空!',
  }

  static USER_INSERT_NULL_OF_USER_NAME = {
    code: '002205',
    msg: '用户新增失败，userName不能为空!',
  }

  static USER_UPDATE_ERROR = {
    code: '002301',
    msg: '用户*修改失败!',
  }

  static USER_UPDATE_NOT_USER = {
    code: '002302',
    msg: '用户*不存在，修改失败!',
  }

  static USER_DELETE_ERROR = {
    code: '002401',
    msg: '用户*删除失败!',
  }
  /* ***************************用户部分结束**************************************/

  /* ***************************角色部分开始**************************************/
  static ROLE_QUERY_ERROR = {
    code: '003101',
    msg: '角色*查询失败!',
  }

  static ROLE_INSERT_ERROR = {
    code: '003201',
    msg: '角色*新增失败!',
  }

  static ROLE_INSERT_REPEAT = {
    code: '003202',
    msg: '角色插入失败，角色*已存在!',
  }

  static ROLE_UPDATE_ERROR = {
    code: '003301',
    msg: '角色*修改失败!',
  }

  static ROLE_DELETE_ERROR = {
    code: '003401',
    msg: '角色*删除失败!',
  }
  /* ***************************角色部分结束**************************************/

  /* ***************************菜单部分开始**************************************/
  static MENU_INSERT_ERROR = {
    code: '004201',
    msg: '菜单*新增失败!',
  }
  /* ***************************菜单部分结束**************************************/

  static appendMsg = (info: {code: string; msg: string}, arg?: any) => {
    const temp = { ...info };
    if (arg) {
      temp.msg = temp.msg.replace('*', arg);
    }
    return temp;
  }
}
