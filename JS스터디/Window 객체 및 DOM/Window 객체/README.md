# Window 객체

- 브라우저에 의해 자동으로 생성되며 웹 브라우저의 창을 나타낸다.
- `window` 객체는 브라우저의 객체이지 JS의 객체가 아니다.
- `window` 객체를 이용하면 브라우저 창에 대한 정보(window 크기 등)를 알 수 있고 제어할 수 있다.
- `var` 키워드로 변수를 선언하거나 함수를 선언하면 `window` 객체의 프로퍼티가 된다.

```jsx
var A =1;
window.A // 접근 가능
```

`window.location.href=”uri주소”` : 초기 화면을 지정

`window.history` 는 내가 방문한 페이지에 대한 정보

`window.navigator` 는 브라우저에 대한 정보

`window.document` 는 브라우저 내부의 콘텐츠 정보