'use strict'
const prompt = require("prompt-sync")();

const firstNumber = prompt("Enter the first number: ");
const secondNumber = prompt("Enter the second number: ");

let temp;
let remainder;


function gcdIterative(num1, num2) {
    if (num1 == 0)
        return num2;
    else if (num2 == 0)
        return num1;
    else if (num1 == num2)
        return num1;

    else if (num1 > num2) {
        while (true) {
            if (num1 % num2 != 0) {
                remainder = num1 % num2;
                if (remainder == 0) {
                    break;
                }
                temp = remainder;
                num1 = num2;
                num2 = remainder;
            }
            else {
                temp = num2;
                break;
            }

        }
        return temp;

    }
    else {
        while (true) {
            if (num2 % num1 != 0) {
                remainder = num2 % num1;
                if (remainder == 0) {
                    break;
                }
                temp = remainder;
                num2 = num1;
                num1 = remainder;
            }
            else {
                temp = num1;
                break;
            }

        }
        return temp;
    }
}

console.log(`The GCD of number ${firstNumber} and number ${secondNumber} is ${gcdIterative(firstNumber, secondNumber)}`);