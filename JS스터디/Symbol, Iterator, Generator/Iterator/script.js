// Iterator
function makeIterator(arr) {
  let index = 0;
  return {
    next: function() {
      return index < arr.length ? { value: arr[index++], done: false } : { value:undefined ,done: true };
    }
  };
}

const numbersArray = [1, 2, 3];

const numbersIterator = makeIterator(numbersArray);

console.log(numbersIterator.next()); // {value: 1, done: false}
console.log(numbersIterator.next()); // {value: 2, done: false}
console.log(numbersIterator.next()); // {value: 3, done: false}
console.log(numbersIterator.next()); // {value: undefined, done: true}

const numbersIterator2 = numbersArray[Symbol.iterator]();

console.log(numbersIterator2.next()); // {value: 1, done: false}
console.log(numbersIterator2.next()); // {value: 2, done: false}
console.log(numbersIterator2.next()); // {value: 3, done: false}
console.log(numbersIterator2.next()); // {value: undefined, done: true}

