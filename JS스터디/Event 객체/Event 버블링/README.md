### 이벤트 버블링

같은 이벤트의 경우 가장 안쪽(중첩되어있는) 태그의 이벤트가 먼저 발생되고 부모 노드의 이벤트가 발생되는 현상

```html
<body>
    <div onclick="alert('div')">Div
        <form action="" onclick="alert('form')">Form
            <p onclick="alert('p')">P</p>
        </form>
    </div>
</body>
<!-- p태그를 누르면 alert('p'), alert('form'), alert('div') 모두 실행  -->
```

**index.html**

```html
<body>
    <div>Div
        <form action="" >Form
            <p>P</p>
        </form>
    </div>
</body>
```

**script.js**

```jsx
const div=document.querySelector('div');
const form=document.querySelector('form');
const p=document.querySelector('p');

form.addEventListener('click',function(e){
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.target===e.currentTarget);
    console.log(this.tagName);
});
```



- `e.target`은 이벤트가 이루어진 객체
- `e.cuttenrtTarget / this` 은 이벤트가 할당된 객체