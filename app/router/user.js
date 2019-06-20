module.exports = app => {
    const { router, controller,jwt } = app;
    router.get('/admin/user/list',jwt,controller.user.index);  
};