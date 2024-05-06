# Symbol

ES6 에서 추가된 원시 타입, 유니크한 식별자를 만들기 위해서 사용된다.

```jsx
//심볼 정의
Symbol("5"); //Symbol(5)

//Symbol 값은 보이는게 같더라도 내부에서는 다른 값을 가진다.
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1===syme2); // false;
```

## 사용 목적

객체 속성의 키로 사용하여 충돌을 방지하고 고유한 식별자를 만들어내는데 유용하다.

```jsx
let carA = {
	id : 1,
	name : 'morning',
	price : 1000
	//Symbol(id) : 300
}

carA.id = 300; // 원래 id 값을 덮어 씌움 => X

const idSym = Symbol('id');
carA[idSym] = 300; // id 값을 덮어 씌우지 않고 Symbol(id) 값에 300이 추가
```

## 특징

1. Symbol은 `for…in` 과 `getOwnPropertyNames`에서 제외가 된다.
Symbol을 이용하면 기본적으로 Property가 숨겨지게 된다. 그래서 `for…in` 과 `getOwnPropertyNames` 을 이용할 때 Symbol로 만든 Property는 보이지 않게 된다.

```jsx
console.log(Object.getOwnPropertyNames(carA)); // id, name, price
for(let key in carA){
    console.log(key); // id, name, price
}

console.log(Object.getOwnPropertySymbols(carA)); // Symbol(id)
```

## Symbol.for()

원래는 Symbol로 값을 생성하면 Symbol의 description이 같더라도 다 다른 값을 가지게 되지만, Symbol.for()을 이용하면 같은 dsecription을 가졌을 때 같은 값을 가지게 된다.

```jsx
const sym1 = Symbol.for("1");
const sym2 = Symbol.for("1");
console.log(sym1===syme2); // true;
```

## Symbol.keyFor()

Symbol.for()을 이용해서 전역 심볼을 만들거나 찾을 때 사용하는 description을 얻을 수 있게 해주는 것이다.