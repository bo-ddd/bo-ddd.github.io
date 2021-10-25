import articles from '../article_data'
import { parseHTML, Ellipsis } from '../../assets/lib/utils/utils';

var tabItem = document.querySelector('.tab-item');
var main = tabItem.querySelector('.main');
var temp = tabItem.querySelector('.item');
var more = main.querySelector('.more');
temp.remove();

let ellipsis = new Ellipsis({
    textCount: 50,
    showFindAllButton: true
});

// 用数据驱动视图
// 分页？ 你得告诉我一个页面渲染多少条数据；
// 你得告诉我渲染的数据是什么；
// 你得告诉我从第几条渲染；
// 你得告诉我从第几
var pagination = {
    pageSize: 2,
    pageNum: 1,
    articles,
    get offset() {
        return this.pageSize * (this.pageNum - 1);
    },
    get data() {
        return this.articles.slice(this.offset, this.pageSize + this.offset);
    },
    get countPage() {
        // 92条数据 每页显示 10 条  总页是10页；
        // this.articles.length  / pageSize = 9.2;    9.2 => 10 ； 其实是向上取整 ；
        return Math.ceil(this.articles.length / this.pageSize);
    },
    get isEnd() {
        // 判断是否最后一页；
        // pageNum >= countPage;
        return this.pageNum >= this.countPage;
    }
}
//渲染文章列表
appendChild()

more.onclick = function () {
    //在页面中插入元素； 
    //  你得知道在哪个元素中插入，插入的数据是什么；
    appendChild();
}

function appendChild() {
    //渲染文章列表
    pagination.data.forEach(async article => {
        var cloneNode = temp.cloneNode(true);
        let art = await article.article();
        let html = parseHTML(art.default);

        //点击标题跳转到文章详情
        html.querySelector('h3').onclick = function () {
            window.location.href = `/articleDetail.html?id=${article.id}`;
        }

        //添加省略号功能；
        ellipsis.el = html.querySelector("article");
        ellipsis.exec();

        //插入元素
        cloneNode.insertBefore(html, cloneNode.querySelector('.nav'));
        main.insertBefore(cloneNode, more);
    })
    pagination.pageNum++;
    if (pagination.isEnd) {
        more.style.display = 'none';
    }
}