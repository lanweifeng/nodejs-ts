import 'reflect-metadata';
import 'tsconfig-paths/register';
import Koa from 'koa';
import config from 'config';
import { useKoaServer, useContainer } from 'routing-controllers';
import { createConnection } from 'typeorm';
import { Container } from 'typedi';
import { Logger } from '@utils';


// 设置端口的环境变量
process.env.EOS_NODE_PORT = process.env.PORT || config.get<number>('serverPort').toString();

// 源码编译目录
const buildDir = config.get<string>('compiledDir');

// Koa实例化
const koa = new Koa();

createConnection(config.get('ormConfig')).then(async () => {
  console.log('db is connected!');
  // 对依赖注入容器进行使用,一种声明，防止报错,在useKoaServer之前声明
  useContainer(Container);

  koa.use(Logger.httpKoaLogger);

  const app = useKoaServer(koa, {
    controllers: [`${process.cwd()}/${buildDir}/controllers/**/*{.js,.ts}`],
    interceptors: [`${process.cwd()}/${buildDir}/service/**/impl/*{.js,.ts}`, `${process.cwd()}/${buildDir}/interceptors/**/*{.js,.ts}`],
    middlewares: [`${process.cwd()}/${buildDir}/middlewares/**/*{.js,.ts}`],
    classTransformer: true,
    defaultErrorHandler: false,
  });

  app.listen(config.get<number>('serverPort'), () => {
    // eslint-disable-next-line no-console
    console.log(`${new Date()}服务在http://localhost:${config.get<number>('serverPort')}启动成功`);
  });
}).catch((error) => console.log('TypeORM connection error: ', error));
