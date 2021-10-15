    // var oCode = document.querySelector('.code');
    // console.log(oCode.innerHTML)
    // var str = oCode.textContent;
    // var res = str.replace(/\s/g,function(text,i){
    //     //回车
    //     console.log(text)
    //     if(/\n/g.test(text)){
    //         return '</br>';
    //     }else if(/\x20/g.test(text)){
    //         return '&nbsp'
    //     }
    // });
    // console.log(res);
    // oCode.innerHTML = res;


    const json = {
        username :' xiaoming',
        age:18
    }
    //写法一：
    // let username = json.username;
    // let age = json.age;

    //写法二：解构赋值的写法；常用
    // let {username,age} = json;

    //
    // function a(json){
    //     const {username,age} = json;
    //     console.log(username) //xiaoming;
    //     console.log(age); //
    // }
    // a(json)
    