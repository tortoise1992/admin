const Service = require('egg').Service;

class UserService extends Service {
  async index() {
    const results = await this.app.mysql.select('user_info');    
    return results
  }
}

module.exports = UserService;