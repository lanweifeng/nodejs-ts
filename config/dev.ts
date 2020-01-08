export default {
  // 源码编译目录
  compiledDir: 'src',
  jwtConfig: {
    // 开发模式鉴权失败不影响程序进行
    passthrough: true,
  },
  // 日志
  log4js: {
    appenders:
      {
        console: {
          type: 'console',
        },
        error: {
          type: 'console',
          layout: {
            type: 'pattern',
            pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] [%p] [%X{ip}] [%X{protocol} %X{method} %X{url}] %X{errors}%n%m %]',
          },
        },
        http: {
          type: 'console',
          layout: {
            type: 'pattern',
            pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] [%p] [%X{ip}] [%X{protocol} %X{method} %X{url}] 请求参数:%n%X{params}%n%]',
          },
        },
      },
  },
};
