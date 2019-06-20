'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
    async index(){
        const userList=await this.ctx.service.user.index()
        this.ctx.body={
            code:200,
            success:true,
            msg:'成功',
            data:{
                rows:userList || []
            }        
        }
    }
}

module.exports = UserController;