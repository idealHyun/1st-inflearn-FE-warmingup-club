function outerFunction(outerVariable){
    return function innerFurction(innerVariable){
        console.log("outerFunction : " +outerVariable);
        console.log("innerFunction : " +innerVariable);
    };
};

const newFunction = outerFunction('outside'); // outerFunction이 호출되어 newFuction이 innerFunction을 가리키고 있음
console.log(newFunction); //[Function: innerFurction]
newFunction('inside');
// outerFunction : outside
// innerFunction : inside

let a='a';

function functionA(){
    let b='b';
    function functionB(){ //Closure : functionB는 functionA의 변수인 b에 접근 가능
        let c='c';
        console.log(a,b,c);
    }
    functionB();
}

functionA();