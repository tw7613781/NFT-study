const Koa = require('koa');
const cors = require('@koa/cors');
const serve = require('koa-static');
const router = require('./router.js');

const app = new Koa();

const port = process.env.PORT || 3000;

app
  .use(cors())
  .use(serve('./images'))
  .use(router.routes());

app.listen(port, console.log(`server is running on port: ${port}`));