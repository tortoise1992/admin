'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx } = this;
    // 获取通过json格式传递的参数
    // ctx.request.body.username
    ctx.body = {
        success:true,
        msg:ctx.request.body.username
    };
  }  
}

module.exports = LoginController;