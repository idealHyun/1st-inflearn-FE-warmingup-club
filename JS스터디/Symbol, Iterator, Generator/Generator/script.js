//Generator
function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const numbersArray = [1, 2, 3];

const numbersGenerator = generator();

console.log(numbersGenerator.next()); // {value: 1, done: false}
console.log(numbersGenerator.next()); // {value: 2, done: false}
console.log(numbersGenerator.next()); // {value: 3, done: false}
console.log(numbersGenerator.next()); // {value: undefined, done: true}