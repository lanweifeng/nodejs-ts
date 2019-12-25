export default {
  Customer: {
    // 源码编译目录
    compiledDir: 'dist',

    // 服务端口
    serverPort: 9696,

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
      dropSchema: false,
      entities: [
        'src/entity/*.{js, ts}',
      ],
      subscribers: [
        'src/subscriber/*.{js, ts}',
      ],
      migrations: [
        'src/migration/*.{js, ts}',
      ],
      cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber',
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

    // 中间件列表
    middlewares: [
      'CustomErrorHandlerMiddleware',
    ],

    // token设置
    credit: {
      initialLimit: 100,
      initialDays: 1,
    },
  },
};
