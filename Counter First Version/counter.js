const prompt = require("prompt-sync")();

const createCounter = function (num) {
    return function counter() {
        return num++;
    }

}

const number = prompt("Enter the start of your counter:");

const counterFunction = createCounter(parseInt(number));
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());





