export class StatusCode {
  private static StatusCode() {
    return null;
  }

  /* ***************************系统部分开始**************************************/
  static SUCCESS = {
    code: 0,
    msg: '操作成功!',
  }

  static TOKEN_ERROR = {
    code: 1000,
    msg: '没有令牌或者令牌无效!',
  }

  static LOGIN_ERROR = {
    code: 1001,
    msg: '用户名或者密码错误!',
  }

  static PARAMS_ERROR = {
    code: 1002,
    msg: '参数格式错误!',
  }
  /* ***************************系统部分结束**************************************/

  /* ***************************用户部分开始**************************************/

  static USER_QUERY_ERROR = {
    code: 2000,
    msg: '用户查询失败!',
  }

  static USER_INSERT_ERROR = {
    code: 2100,
    msg: '用户插入失败!',
  }

  static USER_INSERT_REPEAT = {
    code: 2101,
    msg: '插入失败，用户已存在!',
  }

  static USER_UPDATE_ERROR = {
    code: 2200,
    msg: '修改失败!',
  }

  static USER_DELETE_ERROR = {
    code: 2300,
    msg: '删除失败!',
  }
  /* ***************************用户部分结束**************************************/
}
