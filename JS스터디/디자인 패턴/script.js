// 싱글톤 패턴
let instance;

class Counter{
    constructor(){
        if(instance){
            throw new Error('인스턴스가 이미 존재합니다.');
        }
        this.counter=0;
        instance=this;
    }
    getCount(){
        return this.counter;
    }

    increment(){
        return this.counter++;
    }    
}

const counter=new Counter();
counter.increment();
console.log(counter.getCount());

//팩토리 패턴

//이런식으로 하나씩 만들면 코드양도 많고, 수정하기 힘들다.
const person1={
    name:'홍길동',
    age:16
}
const person2={
    name:'이순신',
    age:20
}
const person3={
    name:'임꺽정',
    age:25
}

// 팩토리 함수
function createPerson(name,age){
    return{
        name,
        age
    }
}

const person4=createPerson('장보고',16);
console.log(person1);
console.log(person4);

//중재자 패턴
class Participant{
    constructor(name){
        this.name=name;
        this.chatroom=null;
    }
    send(message,to){
        this.chatroom.send(message,this,to);
    }
    receive(message,from){
        console.log(`${from.name} to ${this.name}:${message}`);
    }
}

class Chatroom{
    constructor(){
        this.participants={};
    }
    register(participant){
        this.participants[participant.name]=participant;
        participant.chatroom=this;
    }
    send(message,from,to){
        if(to){
            to.receive(message,from);
        }else{
            for(let key in this.participants){
                if(this.participants[key]!==from){
                    this.participants[key].receive(message,from);
                }
            }
        }
    }
}

const yoko=new Participant('Yoko');
const john=new Participant('John');
const paul=new Participant('Paul');

const chatroom=new Chatroom();

chatroom.register(yoko);
chatroom.register(john);
chatroom.register(paul);

yoko.send('All you need is love.');
yoko.send('I love you John.');
john.send('Hey, no need to broadcast',yoko);
paul.send('Ha, I heard that!');

//옵저버 패턴
class Observer{
    constructor(){
        this.observers=[];
    }
    subscribe(f){ //옵저버 추가
        this.observers.push(f);
    }
    unsubscribe(f){ //옵저버 삭제
        this.observers=this.observers.filter(subscriber=>subscriber!==f);
    }
    notify(data){ //옵저버에게 알림
        this.observers.forEach(observer=>observer(data));
    }
}

const o=new Observer();

const logData=(data)=>console.log(`데이터:${data}`);
const logData2=(data)=>console.log(`다른 데이터:${data}`);
o.subscribe(logData);
o.subscribe(logData2);
o.notify('데이터가 변경됨');
console.log(o);

//모듈 패턴

