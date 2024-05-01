let val;

val=document.head; // head태그
val=document.body; // body태그
val=document.baseURI; // 현재 페이지의 baseURI
val=document.URL; // 현재 페이지의 URL

val=document.forms; // form태그들
val=document.forms[0]; // 첫번째 form태그
val=document.forms[0].className; // 첫번째 form태그의 클래스명

document.getElementsByClassName(''); // class로 요소 가져오기
document.querySelector('#header-container'); // 선택자로 요소 가져오기

val=document.forms[0].getAttribute('class'); // 첫번째 form태그의 class속성값
console.log(val);

const headContainer=document.getElementById('header-container'); // id로 요소 가져오기
headContainer.innerText='Hello'; // 요소 내용 변경


let lists=document.getElementsByClassName('list-group-item');   //Collection으로 저장 -> ForEach사용불가
lists = Array.from(lists); // HTMLCollection을 배열로 변환-> ForEach사용가능
lists.forEach((li)=>{
    console.log(li.className);
})

const element = document.getElementById('container');
console.log(element.innerHTML); 
console.log(element.innerText); 
console.log(element.textContent); 

// DOM 탐색

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