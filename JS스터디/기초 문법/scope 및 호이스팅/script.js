// var scope 확인
function func1(){
    var a = 1;
    if(true){
        console.log(a); // 1
    }
    console.log(a); // 1
}

func1();

// let,const scope 확인
function func2(){
    if(true){
        let b = 1;
        const c = 2;
        console.log(b);// 1
        console.log(c);// 2
    }
    console.log(b); // ReferenceError: b is not defined
    console.log(c); // ReferenceError: c is not defined
}

func2();

////////////////////////////////////////

func3(); // hoisting 가능

function func3(){
    console.log("hello"); // hello
}

console.log(hoisting1); // undefined
var hoisting1="aaa";

console.log(hoisting2); // ReferenceError: Cannot access 'hoisting2' before initialization
let hoisting2="bbb";

console.log(hoisting3); // ReferenceError: Cannot access 'hoisting3' before initialization
const hoisting3="ccc";
