'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async index() {
    const { ctx,app,config} = this;
    // 获取通过json格式传递的参数
    // ctx.request.body.username
    let username=ctx.request.body.username,password=ctx.request.body.password
    const user=await ctx.service.login.login({
      username,
      password
    })
    if(user){
      // 登陆成功，返回token
      let token=app.jwt.sign({
        username,
        password
      },config.jwt.secret,{expiresIn: '1h'}) 
      ctx.body = {
        code:200,
        success:true,
        msg:'成功',
        data:{
          token
        }        
      };
    }else{
      ctx.body = {
        code:0,
        success:false,
        msg:'登陆失败'               
      };
    }    
    
  }  
}

module.exports = LoginController;