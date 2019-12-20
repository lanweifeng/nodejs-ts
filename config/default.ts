export default {
  Customer: {
    // 源码编译目录
    compiledDir: 'dist',
    // 服务端口
    serverPort: 9696,
    // 数据库配置
    dbConfig: {
      host: 'localhost',
      port: 5984,
      dbName: 'customers',
    },
    // 用户会话相关配置
    sessionConfig: {
      // keys 暂设置为ts+koa字符串sha256值
      keys: ['8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92'],
      key: 'ts+koa',
      maxAge: 60 * 60 * 24 * 1000,
      signed: true,
    },
    middlewares: [
      'CustomErrorHandlerMiddleware',
    ],
    credit: {
      initialLimit: 100,
      initialDays: 1,
    },
  },
};
