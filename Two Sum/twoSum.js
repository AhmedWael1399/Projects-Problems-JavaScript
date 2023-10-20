'use strict'

const numberArray = [2, 7, 7, 15];
const value = 14;

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (i == j && arr[i] + arr[j] == target)
                continue;
            if (arr[i] + arr[j] == target)
                return [i, j];
        }
    }
    console.log("Target not found");
}

console.log(twoSum(numberArray, value));