'use strict'
const prompt = require("prompt-sync")();

const numberArray = [2, 5, 10, 50, 60, 70, 100, 104];
const item = prompt("Enter the item you wish to search for: ");
let low = 0;
let high = numberArray.length - 1;
let middle;

function binarySearchRecursive(arr, key, lowBoundary, highBoundary) {
    if (lowBoundary > highBoundary)
        console.log(`Item ${key} is not in the array.`);

    else {
        middle = Math.floor((highBoundary + lowBoundary) / 2);
        if (arr[middle] == key && low <= high) {
            console.log(`Item ${key} is found in the array at index ${middle}.`);
        }
        else if (key < arr[middle] && low <= high) {
            highBoundary = middle - 1;
            return binarySearchRecursive(arr, key, lowBoundary, highBoundary)
        }

        else if (key > arr[middle] && low <= high) {
            lowBoundary = middle + 1;
            return binarySearchRecursive(arr, key, lowBoundary, highBoundary)
        }
    }
}

binarySearchRecursive(numberArray, item, low, high);