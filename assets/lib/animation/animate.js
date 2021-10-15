const ANIMATION_TYPE = {
    'translate':async ()=> await import(/* webpackChunkName: "translate" */ './translate')
}

let event = {};

export default class Animate{
    //动画类型
    static type;
    //执行动画的DOM元素
    static el;
    constructor(){
        this.el = Animate.el;
        this.type = Animate.type;
    }
    
    async load(){
        let model = await ANIMATION_TYPE[Animate.type]();
        let animation = new model.default();
        animation.exec();
    }

    on(eventName,callback){
        event[eventName] = callback;
    }

    emit(){
        let eventName = arguments[0];
        let params = Array.from(arguments).splice(1,-1);
        try{
            event[eventName](...params);
        }catch(e){
            console.log(e);
        }
    }

    static create(options){
        Animate.el = options.el;
        Animate.type = options.type;
        return new Animate();
    }
}