import article from '../article_data';
import { parseHTML,Markdown } from '../../assets/lib/utils/utils'

(async function () {
    let url = new URLSearchParams(window.location.search);
    let id = url.get('id');
    let data = article.filter(item => {
        return item.id == id;
    })[0];
    let art = await data.article();
    let html = parseHTML(art.default);
    var el = document.querySelector('article');
    el.appendChild(html);

    //解析markdown语法
    let md = new Markdown(el.textContent);
    let res = md.parse();
    el.innerHTML = res;
})()







