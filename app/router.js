'use strict';

// 添加router文件夹拆分路由模块
module.exports = app => {
  require('./router/login')(app);
};