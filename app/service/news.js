const { Service } = require('egg');
class NewService extends Service {
    // eggjs里内置了一个方法，可以用来读取远程接口数据
    async fetch() {
        let { data } = await this.ctx.curl(this.config.news.url);
        data = data.toString();
        let news = [];
        let reg = /<a href="(http[^"]+)".+>([^<]+?)<\/a>/g;
        data.replace(reg, function (matched, url, title) {
            if(!title.includes('img')){
                news.push({
                    title,
                    url
                });
            }
        });
        return news;
    }
}
module.exports = NewService;