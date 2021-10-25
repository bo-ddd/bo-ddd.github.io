export default  [
    {
        id:1,
        title:'如何看待知乎上的男拳',
        article:async ()=> await import(/* webpackChunkName: "articleContent" */ './article/1.html')
    }
]