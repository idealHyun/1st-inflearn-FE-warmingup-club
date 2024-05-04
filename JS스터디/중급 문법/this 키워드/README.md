# this 키워드

- 객체 내 메소드에서 this 사용시 해당 객체를 가르킨다
- 함수에서 this 사용시 window 객체를 가르킨다.
- constructor 함수에서 this 사용시 constructor 함수에서 this 사용시 빈 객체를 가르킨다
- 화살표 함수 내에서의 this는 상위 스코프가 가리키는 this를 가르킨다.

### Foreach문에서 this 사용

```jsx
let instrument = {
	name: "violin",
	price: [100, 200, 300],
	play: function () {
		this.price.forEach(function (price) {
			console.log(this.name, price); //undefined
		},this);
	},
	play2: function () { //화살표 함수
        this.price.forEach((price) => {
            console.log(this.name, price);
        });
	},
};

instrument.price.forEach(function(price) {
    console.log(this.name, price); //undefined
});

// undefined 100
// undefined 200
// undefined 300

instrument.price.forEach(function(price) {
    console.log(this.name, price); // violin
}, instrument);
instrument.play();
insetument.play2();

// 위 3문장 실행 결과 모두
// violin 100
// violin 200
// violin 300

```

- `forEach`문 내부에서의 `this`는 `forEach`문의 두번째 매개변수를 참조한다.