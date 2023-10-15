const prompt = require("prompt-sync")();

let createCounter = function (number) {

    let counter = {
        num: number,
        increment() {
            this.num++
            return this.num;

        },

        decrement() {
            this.num--;
            return this.num;
        },

        reset() {
            this.num = number;
            return this.num;
        }

    };
    return counter;
}

const chooseNumber = prompt("Enter a number: ");
const myCounter = createCounter(chooseNumber);

console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());
