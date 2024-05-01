## Scope 및 호이스팅

### 변수 타입  유요한 참조 범위

- var : 함수 레벨 스코프; 함수 내부안에서는 사용 가능

```jsx
// var scope 확인
function func1(){
    var a = 1;
    if(true){
        console.log(a); // 1
    }
    console.log(a); // 1
}

func1();
```

- let, const : 블록 레벨 스코프;

```jsx
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
```

### 호이스팅

JS의 인터프리터는 변수 생성의 선언 단계 및 할당 단계를 분할한다. 선언 부분은 코드가 실행되기 전에 현재 범위의 맨 위로 호이스팅 되어진다. 

var, 함수 선언문, let, const 모두 호이스팅이 이루어진다.

- 함수 선언문

```jsx
func3(); // hello

function func3(){
    console.log("hello"); // hello
}
```

- var

호이스팅이 이루어지고 var는 실제 할당(a=”a”;)이 이루어지기 전까지 `undefined` 값이 할당되어진다.

```jsx
console.log(hoisting1); // undefined
var hoisting1="aaa";
```

- let, const

let, cosnt 또한 호이스팅이 이루어지지만 어떤 값도 할당되어지지 않기 때문에 오류가 발생되는 것이다.

```jsx
console.log(hoisting2); // ReferenceError: Cannot access 'hoisting2' before initialization
let hoisting2="bbb";

console.log(hoisting3); // ReferenceError: Cannot access 'hoisting3' before initialization
const hoisting3="ccc";
```

이러한일이 발생하는 이유를 TDZ(Temporal Dead Zone)이라고 말하고, 변수를 사용할 수 없는 일시적인 비활성 상태를 나타낸다.