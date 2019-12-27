import 'reflect-metadata';
import Koa from 'koa';
import config from 'config';
import { useKoaServer } from 'routing-controllers';

/* const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require('koa-session');
const path = require('path');
const ContainerManager = require('typedi');*/

// 设置端口的环境变量
process.env.EOS_NODE_PORT = process.env.PORT || config.get<number>('serverPort').toString();

/* //中间件配置
const middlewaresConfig = conf.middlewares;*/

// 源码编译目录
const buildDir = config.get<string>('compiledDir');

// 依赖注入的文件配置
// const { dependencyInjectConf } = conf;

// 获取文件加载器单例对象
// const fileLoader = require(`../${buildDir}/utils/FileLoader.js`).FileLoader.getInstance();

// 加载文件
// fileLoader.load(buildDir, dependencyInjectConf);

// Koa实例化
const koa = new Koa();

// 中间件目录
// const middlewaresBasePath = `${process.cwd()}/${buildDir}/middlewares`;

// 中间件
// const middlewares = [];

// 获取中间件
/* middlewaresConfig.map((item) => {
  middlewares.push(`${middlewaresBasePath}/${item}.js`);
});*/

// UseServer.useContainer(ContainerManager.Container);
const app = useKoaServer(koa, {
  controllers: [`${process.cwd()}/${buildDir}/controllers/**/*.js`],
  classTransformer: true,
  // defaultErrorHandler: false
});

// 视图注册
/* app.use(views(path.resolve(__dirname, '../web/views'), {
  map: {
    html: 'underscore',
  },
}));*/

// error handler
// onerror(app);

// middlewares
/* app.use(bodyparser({
  enableTypes: ['json', 'form', 'text'],
}));
app.use(json());
app.use(logger());*/

// session 配置
/* const { sessionConfig } = conf;
app.keys = sessionConfig.keys;
app.use(session(sessionConfig, app));*/

// 加载应用下的所有中间件
/* middlewaresConfig.map(function (item) {
  app.use(require(`../${buildDir}/middlewares/${item}`)());
}); */

// 指定静态资源的访问目录
// app.use(require('koa-static')(path.resolve(__dirname, "../web/public/static")));


export default app;
