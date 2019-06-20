
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post('/login',controller.login.index);  
};
// 路由加上app.jwt就相当于加了鉴权的中间件