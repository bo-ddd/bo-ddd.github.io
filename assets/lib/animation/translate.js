import Animate from './animate';

export default class Translate extends Animate{
    constructor(){
        super()
    }
    exec(){
        console.log('super');
        console.log(Animate.el);
        let _this = this;
        this.el.classList.add('ani-translate');
        super.emit('animationstart')
        // this.el.addEventListener('animationstart',function(e){
        //     e.target.classList.remove('ani-translate');
        // })
    }
}