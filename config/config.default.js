exports.keys = 'williamlau';    // 用来加密cookie的，防止修改cookie


exports.view = {
    defaultViewEngine: 'ejs', // 默认的渲染引擎
    mapping: {
        // 如果渲染的是.ejs的模板文件的话，用ejs模板引擎来进行渲染
        '.ejs': 'ejs'
    }
}
exports.news = {
    url: 'https://news.baidu.com/'
}