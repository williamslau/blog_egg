const { Controller } = require('egg');
class NewsController extends Controller {
    // 一般来说，控制器自会处理请求的参数，和返回响应
    async index() {
        let { ctx } = this;
        // 后端渲染
        // let news = [
        //     {
        //         title: '11111111111111111',
        //         url: 'https://www.baidu.com/'
        //     },
        //     {
        //         title: '22222222222222222',
        //         url: 'https://www.baidu.com/'
        //     }
        // ]
        let news=await this.ctx.service.news.fetch();
        // ctx.body = news;
        console.log(news);
        await ctx.render('news.ejs', { news });
    }
}
module.exports = NewsController;