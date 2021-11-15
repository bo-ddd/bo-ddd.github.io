import articles from '../article_data'
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
    //点击标题跳转到文章详情
    html.querySelector('h3').onclick = function(){
        window.location.href = `/articleDetail.html?id=${article.id}`;
    }
    cloneNode.insertBefore(html, cloneNode.querySelector('.nav'));
    main.appendChild(cloneNode);
})

class Vue {
    constructor(props) {
        this.el = props.el;
        this._data = props.data;
        this.compile(this.el);
    }
    compile(el) {
        let element = document.querySelector(el);
        this.compileNode(element);
    }
    compileNode(el){
        let childNodes = el.childNodes;
        childNodes.forEach(node=>{
            //文本
            if(node.nodeType == 3){
                node.textContent = this.compileTextNode(node.textContent);
            }else if(node.nodeTye == 1){
                //标签
            }
            if(node.childNodes.length){
                this.compileNode(node)
            }
        });
    }
    compileTextNode(text){
        let res = text;
        let reg = /\{\{\s*([^\s\{{2}\}{2}]*)\s*\}\}/;
        let flag = false;
        if(reg.test(res)){
            res = res.replace(reg,(item)=>{
                flag = true;
                let key = RegExp.$1;
                console.log(key)
                return this._data[key];
            })
        }
        if(flag) res = this.compileTextNode(res);
        return res;
    }
}

var vm = new Vue({
    el:'#app',
    data:{
        username:'xiaohong',
        age:18
    }
})