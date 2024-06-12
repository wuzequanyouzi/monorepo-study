import Koa from 'koa';
import { bodyParser } from '@koa/bodyparser';
import router from './router/index';

const app = new Koa();
const port: number = 3050;

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

console.log('running on port ', port);
app.listen({ port });
