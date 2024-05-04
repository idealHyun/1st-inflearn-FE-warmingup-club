// call
const hello = function (city,age) {
	console.log(this.name + " hello " + city + age);
};

const person = {
	name: "john",
};

hello.call(person, "seoul",23);

//apply
const hello2 = function (city,age) {
	console.log(this.name + " hello " + city + age);
};

const person2 = {
	name: "john",
};

hello2.apply(person, ["seoul",23]);

//bind
const hello3= function(laguage){
    if(laguage === "en"){
        console.log(this.engName + " hello");
    }
    else if(laguage === "ko"){
        console.log(this.korName + " 안녕");
    }
}

const person3 = {
    korName : "존",
    engName: "john",
}

const hello4 = hello3.bind(person3);
hello4("en");
hello4("ko");