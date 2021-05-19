'use strict';

const Koa = require('koa');
const json = require('koa-json');
const app = new Koa();

app.use(json());

app.use((ctx) => {
  ctx.body = { message: 'Hello World' }
});

app.listen(8000);
