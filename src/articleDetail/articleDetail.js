import article from '../article_route';
import { parseHTML } from '../../assets/lib/utils/utils'



class Markdown {
    static TITLE_REG = /(#+)\s+([^\n]+)/;
    constructor(text) {
        this.text = text;
    }
    parse() {
        return this.text.replace(/.+/g, (item) => {
            console.log(item);
            if (Markdown.isTitle(item)) {
                return this.parseTitle(item);
            } else {
                return this.parseParagraph(item);
            }
        })
    }
    parseParagraph(text) {
        return text.trim().length ? `<p>${text.trim()}</p>` : '';
    }
    parseTitle(text) {
        return text.replace(Markdown.TITLE_REG, function (item) {
            let n = RegExp.$1.length > 6 ? 6 : RegExp.$1.length;  // 1-6个#号；
            let textConent = RegExp.$2;
            return `<h${n}>${textConent}</h${n}>`;
        })
    }
    static isTitle(val) {
        return Markdown.TITLE_REG.test(val);
    }
}


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







