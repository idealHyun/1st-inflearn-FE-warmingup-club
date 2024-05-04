// let result=function(){
//     let name='고양이';
//     return name;
// }

// IIFE(즉시실행함수)
let result=(function(){
    let name='고양이';
    return name;
})()

console.log(result);

// IIFE를 사용한 경우
// count 변수 값이 저장된다.
let score=(function(){
    let count=0;
    return {
        current : ()=>{return count;},
        increment : ()=>{count++;},
        reset : ()=>{count=0;}
    };
})();

// IIFE를 사용하지 않은 경우
// let score=function(){
//     let count=0;
//     return {
//         current : ()=>{return count;},
//         increment : ()=>{count++;},
//         reset : ()=>{count=0;}
//     };
// };

console.log(score.current() );
score.increment();
score.increment();
console.log(score.current());