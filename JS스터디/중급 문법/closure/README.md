# Closure

다른 함수 내부에 정의된 함수가 있는 경우 외부 함수가 실행을 완료하고 해당 변수가 해당 함수 외부에서 더 이상 액세스 할 수 없는 경우에도 해당 내부함수는 외부 함수의 변수 및 범위에 액세스 할 수 있다.

```jsx
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
```

- a는 script 범위 변수
- b는 Closure 범위 변수
- c는 Local 범위 변수