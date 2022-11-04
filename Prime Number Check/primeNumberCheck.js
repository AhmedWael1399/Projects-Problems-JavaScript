'use strict'

const prompt = require("prompt-sync")();

const value = prompt("Enter the number you want to check: ");

function checkPrimeNumber(number) {
    if (number > 1) {
        if (number <= 3)
            return console.log(`The number ${number} is a prime number`);

        else if (number % 2 == 0 || number % 3 == 0)
            return console.log(`The number ${number} is not a prime number.`);

        else
            console.log(`The number ${number} is a prime number.`);
    }
    else
        console.log(`Please enter a number greater than 1`);
}

checkPrimeNumber(value);