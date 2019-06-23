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
    async add(){
        const { ctx } = this;
        let newUser=ctx.request.body,username=newUser.username
        // 先查是否用户名重复
        let hasUser=await this.ctx.service.user.find(username)
        if(!hasUser){
            let response=await this.ctx.service.user.add(newUser)
            if(response.affectedRows === 1){
                ctx.body={
                    code:200,
                    success:true,
                    msg:'操作成功'                      
                }
            }else{
                ctx.body={
                    code:0,
                    success:false,
                    msg:'操作失败'                      
                }
            }
        }else{
            ctx.body={
                code:0,
                success:false,
                msg:'用户名重复'                      
            }
        }
        
    }
}

module.exports = UserController;