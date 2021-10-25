import articles from '../article_route'
import { parseHTML } from '../../assets/lib/utils/utils';


var tabItem = document.querySelector('.tab-item');
var main = tabItem.querySelector('.main');
var temp = tabItem.querySelector('.item');
temp.remove();

//渲染文章列表
articles.forEach(async article => {
    var cloneNode = temp.cloneNode(true);
    let art = await article.article();
    let html = parseHTML(art.default);
    cloneNode.insertBefore(html, cloneNode.querySelector('.nav'));
    main.appendChild(cloneNode);
})