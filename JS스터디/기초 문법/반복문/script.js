const user = {
	name: "Kim",
	age: 20,
	email: "kim@naver.com",
};

for (let x in user) {
    console.log(x); // name, age, email
    console.log(user[x]); // Kim, 20, kim@naver.com
}

const city = ["Seoul", "Busan", "Jeju"];

for (let x in city) {
    console.log(x); // 0, 1, 2
    console.log(city[x]); // Seoul, Busan, Jeju
}

console.log("forEach"); 
city.forEach((value, index) => {
    console.log(index); // 0, 1, 2
    if(index === 1) {
        return;
    }
    console.log(value); // Seoul, Busan, Jeju
});

city.map((value, index) => {
    console.log(index); // 0, 1, 2
    console.log(value); // Seoul, Busan, Jeju
});