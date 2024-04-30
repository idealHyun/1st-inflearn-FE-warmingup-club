## 변수(var, let, const)

### var

- 중복 선언 가능
- 재할당 가능
- 소스 코드가 복잡해질 경우 기존 변수를 다시 선언하여 할당을 하여 값 변경을 파악하기 힘들 수 있음
- var의 사용을 줄이는 것이 좋음

```jsx
var hello="hello";
console.log(hello);

var hello="hello2"; //var은 중복선언 가능
console.log(hello); 

hello="hello3"; //var은 재할당 가능
console.log(hello); //hello3
```

### let

- 중복 선언 불가
- 재할당 가능

```jsx
let hi="hi"; 
console.log(hi);

let hi="hi2"; //오류 : let은 중복선언 불가능
console.log(hi); 

hi="hi3"; //let은 재할당 가능
console.log(hi); //hi3  
```

### const

- 중복 선언 불가
- 재할당 불가

```jsx
const hey="hey";
console.log(hey);

const hey="hey2"; //오류 :const는 중복선언 불가능
console.log(hey);

hey="hey3"; // const는 재할당 불가능
console.log(hey); // hey
```