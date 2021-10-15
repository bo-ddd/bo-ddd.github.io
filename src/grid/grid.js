import Animate from '../../assets/lib/animation/animate'

let animate = Animate.create({
    el:document.querySelector('div'),
    type:'translate',
})

animate.on('animationstart',function(){
    console.log('animatakdlf;asdf')
})

animate.load();

// 作业一：Translate()   Opicity();
// class Animate{
//     constructor(props){
//         console.log(props);
//         this.el = props.el;
//         this.type = props.type;
//     }
//     load(){
//         if(this.type == 'translate'){
//             this.model = new Translate();
//             this.model.exec(this.el);
//         }else if(this.type == 'opicity'){
//             this.model = new Opicity();
//             this.model.exec(this.el);
//         }
//     }
// }

// var props = {
//     model: new dnimation()
// }

// props.model.exec();

// class Translate{
//     constructor(){
//     }
//     exec(el){
//         console.log("动画运动起来了！");
//         el.classList.add("change")
//     }
//     static install(){
//         return new Translate();
//     }
// }

// class Opicity{
//     constructor(){
//     }
//     exec(el){
//         console.log("动画运动起来了！");
//         el.classList.add("changeopt")
//     }
// }
// new Animate({
//     el:document.querySelector('div'),
//     model:new Opicity()
// })


// 作业二： 
// new Animate({
//     el:document.querySelector('div'),
//     type:'translate',  // 'opicity'
// }).load();

// 作业三： 
// Animate.create({  
//     type:'translate',
// }).mount(document.querySelector('div'))

// 作业四：
//  use方法中应该接收一个 Translate.install的静态方法；如果没有静态方法，那么直接执行这个方法；
//  注意：是直接执行这个方法，而不是 new一个构造函数；
// Animate.create().use(Translate).mount(document.querySelector('div'))

// class Animate{
//     constructor(props){
//         console.log(props);
//         this.el = props.el;
//         this.type = props.type;
//     }
//     static create(){
//         return new Animate();
//     }
//     use(Translate){
//         try{
//             this.model = Translate.install();
//         }catch(e){
//             Translate();
//         }
//     }
//     mount(el){
//         this.el = el;
//         this.model.exec(this.el);
//     }
// }

//作业五：子类这么写实现第四个作业；
// export default class Translate extends Animate{
//     constructor(){
//         super()
//     }
//     exec(){
//         this.el.classList.add('ani-translate');
//     }
//     install(){
//          return new Translate();
//     }
// }
// let animate = Animate.create().use(Translate).mount(document.querySelector('div')


// 作业六：
// let animate = Animate.create().use(Translate).mount(document.querySelector('div')
// 动画运行开始时执行on中的方法： on通过emit方法兼听；
// this.emit('animationstart')
// animate.on('animationstart',function(){
//     console.log('DOM元素已经成功运行起来喽，你还想作些什么操作呢？')
//    // 注：项目中，这种在某种时候运行的高阶函数，称为钩子函数，一般用来写自己的业务逻辑；
// })



