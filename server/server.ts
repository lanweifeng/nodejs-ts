import config from 'config';
import app from './app';

app.listen(config.get<number>('Customer.serverPort'), () => {
  // eslint-disable-next-line no-console
  console.log(`${new Date()}服务在http://localhost:${config.get<number>('Customer.serverPort')}启动成功`);
});
