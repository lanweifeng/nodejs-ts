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
    code: 10000,
    msg: '没有令牌或者令牌无效!',
  }

  static LOGIN_ERROR = {
    code: 10001,
    msg: '用户名或者密码错误!',
  }

  static PARAMS_ERROR = {
    code: 10002,
    msg: '参数格式错误!',
  }
  /* ***************************系统部分结束**************************************/

  /* ***************************用户部分开始**************************************/

  static USER_QUERY_ERROR = {
    code: 20100,
    msg: '用户查询失败!',
  }

  static USER_INSERT_ERROR = {
    code: 20101,
    msg: '用户插入失败!',
  }

  static USER_INSERT_REPEAT = {
    code: 20102,
    msg: '用户插入失败，用户已存在!',
  }

  static USER_UPDATE_ERROR = {
    code: 20103,
    msg: '用户修改失败!',
  }

  static USER_DELETE_ERROR = {
    code: 20104,
    msg: '用户删除失败!',
  }
  /* ***************************用户部分结束**************************************/

  /* ***************************角色部分开始**************************************/
  static ROLE_QUERY_ERROR = {
    code: 20200,
    msg: '角色查询失败!',
  }

  static ROLE_INSERT_ERROR = {
    code: 20201,
    msg: '角色插入失败!',
  }

  static ROLE_INSERT_REPEAT = {
    code: 20202,
    msg: '角色插入失败，角色已存在!',
  }

  static ROLE_UPDATE_ERROR = {
    code: 20203,
    msg: '角色修改失败!',
  }

  static ROLE_DELETE_ERROR = {
    code: 20204,
    msg: '角色删除失败!',
  }
  /* ***************************角色部分结束**************************************/
}
