function Person(name, age) {
    this.name = name;
    this.age = age;
    // this.caluateAge = function() {
    //     return this.age+1;
    // }   
}

var person1 = new Person('홍길동', 20);
var person2 = new Person('홍길순', 22);

// Prototype에 메소드를 추가함으로써 메모리를 절약할 수 있다.

Person.prototype.caluateAge = function() {
    return this.age+1;
}

// Object.create 

const personPrototype = {
    caluateAge() {
        return this.age+1;
    }
}

function Person(name, age) {
    let person= Object.create(personPrototype);
    this.name = name;
    this.age = age;
    return person;
}