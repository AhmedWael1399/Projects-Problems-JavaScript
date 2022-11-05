'use strict'
const prompt = require("prompt-sync")();

const numberArray = [];
const size = prompt("Enter the size of the array: ");
let intValue;
let number1;
let number2;

for (let i = 0; i < size; i++) {
    let value = prompt(`Enter value #${i + 1}: `);
    floatValue = parseFloat(value);
    numberArray.push(floatValue);
}

function swapVariables(arr, index1, index2) {
    let temp;
    temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

number1 = parseFloat(prompt("Enter the first number to be swapped: "));
number2 = parseFloat(prompt("Enter the second number to be swapped: "));

if (numberArray.includes(number1) && numberArray.includes(number2)) {

    swapVariables(numberArray, numberArray.indexOf(number1), numberArray.indexOf(number2))
    console.log(numberArray);
}
else
    console.log("Please enter a valid input 😒😠");