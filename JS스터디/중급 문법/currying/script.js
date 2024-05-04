const sum=(a,b)=>a+b;

const currying=a=>b=>sum(a,b);

console.log(sum(1,2)); // 3
console.log(currying(1)(2)); // 3
console.log(currying(1)); // [Function: currying](b=>sum(a,b)) 매개변수를 모두 입력해야 값이 나옴

// 어떠한 변수든 커리 함수로 만들 수 있음
function curry(func){
    return function curried(...args){
        if(args.length>=func.length){
            return func.apply(this,args);
        }else{
            return function(...args2){
                return curried.apply(this,args.concat(args2));
            }
        }
    }
}