let str = `
<li>
<a href="http://news.ifeng.com/a/20180515/58309502_0.shtml?_zbs_baidu_news" mon="ct=1&amp;a=2&amp;c=top&pn=2" target="_blank">中美贸易磋商对中国经济有何影响？国家统计局回应</a></li>
<li>
<a href="https://3w.huanqiu.com/a/a-XDHTCGD7C144CE91066A4A?agt=8" mon="ct=1&amp;a=2&amp;c=top&pn=3" target="_blank">人民日报谈“杠精”：打压别人刷存在，真有含金量？</a></li>
<li>
<a href="https://3w.huanqiu.com/a/a-XDHTCG7B07C0B71A75E257?agt=8" mon="ct=1&amp;a=2&amp;c=top&pn=4" target="_blank">交通运输部：保障乘客安全是网约车规范发展底线</a></li>
<li>
<a href="https://kandian.youth.cn/index/detail?sign=eRxwBVL6LA4zdja" mon="ct=1&amp;a=2&amp;c=top&pn=5" target="_blank">中泰联合查处“黑导游”恐吓强迫中国游客购物事件</a></li>
<li>
<a href="http://news.china.com/domestic/945/20180515/32412695.html?newsbaidu" mon="ct=1&amp;a=2&amp;c=top&pn=6" target="_blank">公安部:集资传销涉众犯罪高发 养老领域成重灾区</a></li>`;

let reg = /<a href="(http[^"]+)".+>([^<]+?)<\/a>/g;
let result=str.match(reg);
console.log(result);