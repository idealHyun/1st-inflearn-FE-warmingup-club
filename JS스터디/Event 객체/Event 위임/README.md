### 이벤트 위임

하위 요소의 이벤트를 상위에서 제어하는 것을 말함

index.html

```html
<div id="buttonContainer">
    <button>버튼 1</button>
    <button>버튼 2</button>
    <button>버튼 3</button>
</div>
```

script.js

```jsx
// 상위 요소인 div에 이벤트 추가
document.querySelector('#buttonContainer')
.addEventListener('click', ()=>{alert("클릭")});
```