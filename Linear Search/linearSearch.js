'use strict'
const prompt = require("prompt-sync")();

const numberArray = [10, 15, 16, 17, 18, 19, 20, 25, 30, 35, 40, 45, 100];
let flag = 0;
const item = prompt("Enter the value you want to find: ");
let i = 0

const linearSearch = function (arr, key) {
    for (i = 0; i < arr.length; i++) {
        if (key == arr[i]) {
            flag = 1;
            break;
        }
        else flag = 0;
    }
}

linearSearch(numberArray, item);
if (flag == 1) {
    console.log(`The value ${item} is found in the number array at place number ${i + 1}. `);
}

else console.log(`The value ${item} is not found in the number array`);