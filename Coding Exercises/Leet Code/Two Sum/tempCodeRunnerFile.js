'use strict'

const numberArray = [3, 2, 3];
const value = 6;

function twoSum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == target)
                return [i, j];
        }
    }
    console.log("Target not found");
}

console.log(twoSum(numberArray, value));