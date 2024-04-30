var hello="hello";
console.log(hello);

var hello="hello2"; //var은 중복선언 가능
console.log(hello); 

hello="hello3"; //var은 재할당 가능
console.log(hello); 


let hi="hi"; 
console.log(hi);

let hi="hi2"; //오류 : let은 중복선언 불가능
console.log(hi);

hi="hi3"; //let은 재할당 가능

const hey="hey";
console.log(hey);

const hey="hey2"; //오류 :const는 중복선언 불가능
console.log(hey);

hey="hey3"; //오류 : const는 재할당 불가능