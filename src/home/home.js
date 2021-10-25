import articles from '../article_route'
var tabItem = document.querySelector('.tab-item');
var main = tabItem.querySelector('.main');
var temp = tabItem.querySelector('.item');
temp.remove();
articles.forEach(async article => {
    var cloneNode = temp.cloneNode(true);
    let articleContent = await article.article();
    cloneNode.insertBefore(articleContent, cloneNode.querySelector('.nav'));
    main.appendChild(cloneNode);
})

    // var str = 'hello world'; // new String()
    // var reg = /\n/  //正则：是用来匹配字符串的；
    //但是，有一些特殊字符，是无法匹配的；
    // 特殊字符： / \ () [] {} \n
    //  \n 匹配回车；
    // \s 匹配空格；
    // g  global;   
    //  +  一个或者多个

    // var s = '#############'
    //  let res = s.replace(/#+(\S)*\s/g, function(item){
    //      console.log(item) //#  ## ### ####  ##### ######
    //      if(item.length)
    //      var el = document.createElement('h' + item.length);
    //      return item;
    //  })

    // 作业： 
    // 1.匹配换行，把换行之前的文本改成p标签
    // 2. ###  h3  
    // #### h4  
    // # h1
    // ###### h6