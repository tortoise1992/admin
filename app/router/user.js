module.exports = app => {
    const { router, controller,jwt } = app;
    router.get('/user/list',jwt,controller.user.index);  
};