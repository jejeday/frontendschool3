function a() {console.log(this)} // this는 윈도우를 가리킵니다.
    ();

// 함수를 호출해준 아이가 this가 됩니다.

function b(){
    console.log('hello world')
}
b()
window.b()

let test = {
    one:1,
    two:2,
    three: function(){
        donsole.log(this)
    }
}

test.three()
let test2 = test.three

// 추가 예제 - this 파트에서 가장 중요한 부분(이 부분은 외우자) //
function sayName(){
    console.log(this.name);
}

var name = 'Hero';

let peter = {
    name: 'Peter Parker',
    sayName: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    sayName: sayName
}
//

sayName();
peter.sayName();
bruce.sayName();

function a(){
    console.log(this.name)
    function b(){
        console.log(this.name)
    }
    b()
}
a()