### 이벤트 적용 방법

1. 자바 스크립트 코드에서 프로퍼티로 등록

```jsx
window.load = function (){
	let text= document.getElementById("text");
	text.innerHTML = "HTML 문서 loaded";
}
```

1. HTML 태그에 속성으로 등록

```jsx
<button onclick="alert('버튼 클릭')"> 버튼 </button>
```

1. `addEventListender()` 사용

`element.addEventListener(’이벤트명’,실행할 함수,옵션);`

이벤트 객체를 매개변수로 받아 정보를 사용할 수 있음

```jsx
const button = document.querySelector('button');
button.addEventListener('click',()=> {console.log("click");});
```