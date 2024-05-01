# 반복문

### for in 문

배열이나 객체의 요소를 순서대로 할당한다

```jsx
const user = {
	name: "Kim",
	age: 20,
	email: "kim@naver.com",
};

for (let x in user) {
    console.log(x); // name, age, email
    console.log(user[x]); // Kim, 20, kim@naver.com
}

const city = ["Seoul", "Busan", "Jeju"];

for (let x in city) {
    console.log(x); // 0, 1, 2
    console.log(city[x]); // Seoul, Busan, Jeju
}
```

### forEach 문

배열의 데이터 값과 인덱스를 이용한다.

```jsx
const city = ["Seoul", "Busan", "Jeju"];

city.forEach((value, index) => {
    console.log(index); // 0, 1, 2
    console.log(value); // Seoul, Busan, Jeju
});
```

### map 문

forEach문과 비슷하게 배열의 데이터 값과 인덱스를 이용한다.

```jsx
const city = ["Seoul", "Busan", "Jeju"];

city.map((value, index) => {
    console.log(index); // 0, 1, 2
    console.log(value); // Seoul, Busan, Jeju
});
```

### for 문과 forEach문 차이점

- for 문은 필요한 경우 break 문을 사용하여 반복을 중단할 수 있지만, forEach 문은 반복을 중단시킬 수 없다.
- for 문은 await과 함께 작동하지만 forEach는 await과 완벽하게 작동하지 않는다.
- for 문이 forEach 보다 빠르다.