
/**
 * egg.js是基于koa封装的一个上级框架
 * router就是路由中间件的router的实例，可以在他身上定义路由规则
 * controller 控制器的容器
 * app.get('/',function(){});
 * get指的是http的方法名
 * 1.controller()
 * 2.得到HomeController
 * 3.controller.home = home;
 */
module.exports = (app) => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.index);
}