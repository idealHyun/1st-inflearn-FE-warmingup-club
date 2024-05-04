let animalData={
    'name':'고양이',
    'age':2,
}

function getAnimalData(){
    let name=animalData.name;
    let age=animalData.age;
}

// 객체 구조 분해 할당
function getAnimalData(){
    let {name,age}=animalData;
}

let weekDay = ['월','화','수','목','금','토','일'];
// let day1=weekDay[0];
// let day2=weekDay[1];
// let day3=weekDay[2];
// let day4=weekDay[3];
// let day5=weekDay[4];
// let day6=weekDay[5];
// let day7=weekDay[6];

// 배열 구조 분해 할당
let [day1,day2,day3,day4,day5,day6,day7]=weekDay; 