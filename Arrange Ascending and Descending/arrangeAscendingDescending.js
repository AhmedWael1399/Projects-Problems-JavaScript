'use strict';
const prompt = require("prompt-sync")();

const data = [];
const dataSize = prompt("Enter the number of your Data: ");
let intValue;

for (let i = 0; i < dataSize; i++) {

    let value = prompt(`Data Entry #${i + 1}: `)
    intValue = parseInt(value);
    data.push(intValue);
}

function arrangeAscending(arr) {
    let i = 0;
    let j = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}

function arrangeDescending(arr) {
    let i = 0;
    let j = 0;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr
}
console.log(arrangeAscending(data));
console.log(arrangeDescending(data));