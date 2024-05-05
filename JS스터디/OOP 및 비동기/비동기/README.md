# 비동기

## Callback 함수

특정 함수에 매개변수로 전달된 함수

콜백 함수는 함수를 전달받은 함수 안에서 호출이 된다.

단점

- 소스 코드를 보는데 가독성이 떨어짐
- 에러 처리를 한다면 모든 콜백에서 각각 에러 핸들링을 해주어야함

## Promise

자바스크립트 비동기 처리에 사용되는 객체이다.

Promise 객체는 비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과값을 나타낸다.

Promise는 new 키워드와 생성자를 사용해 만든다. 생성자는 매개변수로 실행함수를 받는다. 

```jsx
function fetchData() {
	return new Promise((resolve, reject) => {
		const sucess = false;
		if (sucess) {
			resolve("Data fetched");
		} else {
			reject("Data not fetched");
		}
	});
}

fetchData()
	.then((result) => {
		// resolve 함수 실행되면 이곳으로 이동
		console.log(result);
	})
	.catch((error) => {
		// reject 함수 실행되면 이곳으로 이동
		console.log(error);
	})
	.finally(() => {
		// resolve, reject 둘 다 실행
		console.log("Process complete");
	});
```

### Promise 상태 3가지

1. 대기(pending) : 비동기 처리 로직이 완료되지 않은 상태
2. 이행(fulfilled) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
3. 거부(rejected) : 비동기 처리가 실패하거나 오류가 발생한 상태

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/5e953a61-5c75-4dbd-812f-fa31572de29b/13b59093-9b93-4f00-a687-640a52700b25/Untitled.png)

### Promise.all()

인자로 전달된 모든 프로미스가 완료될 때까지 기다린 다음에야 결과를 반환한다. 

```jsx
// Promise.all
const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = 11;
const promise3= new Promise((resolve, reject) => {
    const sucess = true;
    if (sucess) {
        resolve("Data fetched");
    } else {
        reject("Data not fetched");
    }
});
```

### Promise.race()

`Promise.race()` 메소드는 `Promise` 객체를 반환하게 되는데, 반환되는 `Promise` 객체는 iterable 안에 있는 프로미스 중에 가장 먼저 완료된 것의 결과값으로 `resolve` 혹은 `reject` 되어진다.

```jsx
// Promise.race
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Promise 4 resolved");
});
const promise5 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Promise 5 resolved");
});
Promise.race([promise4, promise5]).then((value) => {
    console.log(value); // Promise 4 resolved
});
```

## Async / Await

함수를 async 키워드로 감싸주고 await을 통해 해당 메소드가 결과값이 나올때까지 기다리게 함으로써 동기적으로 처리할 수 있게 된다.

- Promise에 then 메소드를 체인 형식으로 호출하는 것보다 가독성이 좋다.
- await 은 async 키워드로 감싸진 내부 함수에서만 사용이 가능하다.
- 동기식 코드에서 쓰이는 try..catch 문을 async/await 구조에서 사용할 수 있다.

```jsx
// Async/Await
async function fetchData() {
    try{ // Promise의 resolve
        const response1 = await fetch();
        console.log(response1);
    } catch(error){ // Promise의 reject
        console.log(error);
    } finally {
        console.log("Process complete");
    }
}
```