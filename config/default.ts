import { LoggingEvent } from 'koa-log4';

export default {
  // 源码编译目录
  compiledDir: 'dist',

  // 服务端口
  serverPort: 9696,

  jwtConfig: {
    // jwt秘钥
    secret: 'chaintor',
  },

  // 数据库orm配置 https://typeorm.io/#/connection-options
  ormConfig: {
    type: 'mysql',
    host: '192.168.214.181',
    port: 30306,
    username: 'root',
    password: 'root',
    database: 'lsbcmcceosdb',
    // 指示是否在每次应用程序启动时自动创建数据库架构。 请注意此选项，不要在生产环境中使用它，否则将丢失所有生产数据。
    synchronize: true,
    // 每次建立连接时删除架构。请注意此选项，不要在生产环境中使用它，否则将丢失所有生产数据。
    dropSchema: true,
    /**
     * query - 记录所有查询。
     * error - 记录所有失败的查询和错误。
     * schema - 记录架构构建过程。
     * warn - 记录内部 orm 警告。
     * info - 记录内部 orm 信息性消息。
     * log - 记录内部 orm 日志消息。
     */
    logging: ['query'],
    entities: [
      `${process.cwd()}/src/entity/**/*{.js,.ts}`,
    ],
    subscribers: [
      `${process.cwd()}/src/subscriber/**/*.{js, ts}`,
    ],
    migrations: [
      `${process.cwd()}/src/migration/**/*.{js, ts}`,
    ],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
  },

  // 日志
  log4js: {
    appenders:
      {
        console: {
          type: 'console',
        },
        error: {
          type: 'dateFile',
          filename: 'error',
          pattern: '-yyyy-MM-dd-hh.log',
          alwaysIncludePattern: true,
          encoding: 'utf-8',
          maxLogSize: 1000,
          numBackups: 3,
          path: `${process.cwd()}/logs/error`,
        },
        http: {
          type: 'dateFile',
          filename: 'http',
          pattern: '-yyyy-MM-dd-hh.log',
          alwaysIncludePattern: true,
          encoding: 'utf-8',
          maxLogSize: 1000,
          numBackups: 3,
          path: `${process.cwd()}/logs/http`,
          layout: {
            type: 'pattern',
            pattern: '%[[%d{yyyy-MM-dd hh:mm:ss}] [%p] [%X{ip}] [%X{protocol} %X{method} %X{url}] 请求参数:%n%X{params}%n%]',
          },
        },
      },
    // 供外部调用的名称和对应设置定义
    categories: {
      default: {
        appenders: ['console'], level: 'off',
      },
      error: {
        appenders: ['error'], level: 'error',
      },
      http: {
        appenders: ['http'], level: 'all',
      },
    },
  },

  // 用户会话相关配置
  sessionConfig: {
    // keys 暂设置为ts+koa字符串sha256值
    keys: ['8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'],
    key: 'ts+koa',
    maxAge: 60 * 60 * 24 * 1000,
    signed: true,
  },

  // token设置
  credit: {
    initialLimit: 100,
    initialDays: 1,
  },
};
