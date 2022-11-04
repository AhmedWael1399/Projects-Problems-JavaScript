"use strict";
const prompt = require("prompt-sync")();

const numberArray = [10, 20, 30, 40, 60, 80, 90, 100, 200];
const item = prompt("Enter the value you want to find: ");
let flag = 0;

function binarySearchIterative(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let middle;

    while (high >= low) {
        middle = Math.floor((high + low) / 2);
        if (key < arr[middle]) {
            high = middle - 1;
        }
        if (key > arr[middle]) {
            low = middle + 1;
        }
        if (key == arr[middle]) {
            console.log(`Item ${key} is found in the array at index ${middle}.`);
            flag = 1;
            break;
        }
    }
    if (flag = 0)
        console.log(`Item ${key} is not in the array.`)
}

binarySearchIterative(numberArray, item);

