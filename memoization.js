


const cache = {};
const squareMemoization = (a) =>  {
    if(a in cache) {
        return cache[a]
    } else {
        return cache[a] = a * a;
    }
};
console.time("timer Memoization");
console.log(squareMemoization(2))
console.log(squareMemoization(3))
console.log(squareMemoization(2))
console.log(squareMemoization(2))
console.timeEnd("timer Memoization");



const square = (a) =>  a * a;
console.time("timer");
console.log(square(2))
console.log(square(3))
console.log(square(2))
console.log(square(2))
console.timeEnd("timer");





