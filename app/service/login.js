const Service = require('egg').Service;

class LoginService extends Service {
  async login(param) {
    const user = await this.app.mysql.get('user_info', param);
    return user
  }
}

module.exports = LoginService;