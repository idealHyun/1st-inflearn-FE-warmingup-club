//Symbol 값은 보이는게 같더라도 내부에서는 다른 값을 가진다.
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1===syme2); // false;

const sym3 = Symbol('sym');
console.log(sym3.description); // sym

let carA = {
	id : 1,
	name : 'morning',
	price : 1000
	//Symbol(id) : 300
}

carA.id = 300; // 원래 id 값을 덮어 씌움 => X

const idSym = Symbol('id');
carA[idSym] = 300; // id 값을 덮어 씌우지 않고 Symbol(id) 값에 300이 추가

console.log(Object.getOwnPropertyNames(carA)); // id, name, price
for(let key in carA){
    console.log(key); // id, name, price
}

console.log(Object.getOwnPropertySymbols(carA)); // Symbol(id)


const sym6 = Symbol.for("1");

console.log(Symbol.keyFor(sym6)); // 1

class Car{
    constructor(){
        this.length = 0;
    }

    add(brand,name){
        this[brand] = name;
        this.length++;
    }
}
