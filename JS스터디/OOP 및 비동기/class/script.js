class Person{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    introduce(){
        return `이름은 ${this.name} 이메일은 ${this.email}`;
    }
}

const person = new Person('kim','a@anver.com');

console.log(person);