const Service = require('egg').Service;

class UserService extends Service {
  async index() {
    const results = await this.app.mysql.select('user_info');    
    return results
  }
  async add(user){
    const results = await this.app.mysql.insert('user_info',user);    
    return results
  }
  async find(name){
    const results = await this.app.mysql.get('user_info',{username:name});    
    return results
  }
}

module.exports = UserService;