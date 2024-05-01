## DOM 객체 이용해보기

```jsx
let val;

val=document.head; // head태그
val=document.body; // body태그
val=document.baseURI; // 현재 페이지의 baseURI
val=document.URL; // 현재 페이지의 URL

val=document.forms; // form태그들
val=document.forms[0]; // 첫번째 form태그
val=document.forms[0].className; // 첫번째 form태그의 클래스명

val=document.forms[0].getAttribute('class'); // 첫번째 form태그의 class속성값
```

## DOM 객체 접근

### 접근 방법

```jsx
document.getElementById(); // id로 요소 가져오기
document.getElementsByClassName(); // class로 요소 가져오기
document.getElementsByTagName(); // Tag로 요소 가져오기
document.querySelector(); // 선택자로 요소 가져오기
document.querySelectorAll(); // 선택자로 요소 모두 가져오기
```

### 접근하여 변경

```jsx
const headContainer=document.getElementById('header-container'); // id로 요소 가져오기
headContainer.innerText='Hello'; // 요소 내용 변경
headContainer.style.display='none'; // 요소 숨기기

let lists=document.getElementsByClassName('list-group-item');   //Collection으로 저장 -> ForEach사용불가
lists = Array.from(lists); // HTMLCollection을 배열로 변환-> ForEach사용가능
lists.forEach((li)=>{
    console.log(li.className);
})
```

### innerHTML , innerText, textContent 차이점

```html
<div id='container'>
    innerHTML  innerText       textContent          차이점
      <span style='display:none'>안보이는 텍스트</span>
</div>
```

```jsx
const element = document.getElementById('container');
console.log(element.innerHTML); 
console.log(element.innerText); 
console.log(element.textContent); 
```

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/5e953a61-5c75-4dbd-812f-fa31572de29b/fbb4a3d6-22f4-4e1c-9e55-e72b9b6999f4/Untitled.png)

- innerHTML : html 까지 같이 그대로 모두 보여준다
- innerText : 사용자에게 보여지는 텍스트값만 보여주고, 여러공백은 무시하고 하나의 공백만 처리한다
- textContent : display.none 스타일이 적용된 숨겨진 텍스트도 가져오며, 노드가 가지고 있는 텍스트 값 모두를 그대로 보여준다.

### DOM 탐색

```jsx
const list=document.querySelector('.list-group');
const listItem=document.querySelector('.list-group-item:first-child');

val=list.childNodes;
console.log(val); // NodeList(7) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text] text는 줄바꿈(line break)을 의미한다.
val=list.children;
console.log(val); // HTMLCollection(3) [li.list-group-item, li.list-group-item, li.list-group-item] text는 제외된다.

Array.from(list.childNodes); // NodeList를 배열로 변환

val=list.childNodes[0]; // text
// list.childNodes[0] === list.firstChild
val=list.children[0]; // li.list-group-item
// list.children[0] === list.firstElementChild

console.log(val);

val=listItem.parentElement; // 부모요소
val=listItem.nextElementSibling; // 다음 형제요소
val=listItem.previousElementSibling; // 이전 형제요소, 없으면 null
```

### 요소 생성, 삭제, 교체

```jsx
const list=document.querySelector('.list-group');

// 요소 생성
const newItem=document.createElement('li');
newItem.className='list-group-item';
newItem.textContent='NEW Item ';
list.appendChild(newItem); // 마지막 자식요소로 추가
newItem.setAttribute('title','New Item'); // 속성 추가

const link=document.createElement('a');
newItem.appendChild(link); // 자식요소로 추가

// 요소 삭제
list.removeChild(list.children[0]); // 첫번째 자식요소 삭제

// 요소 교체
list.replaceChild(newItem,list.children[0]); // 첫번째 자식요소 교체
```