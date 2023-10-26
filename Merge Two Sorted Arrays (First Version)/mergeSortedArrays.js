'use strict'
const prompt = require("prompt-sync")();

const numberArray1 = [];
const size1 = prompt("Enter the size of the first array: ");
let intValue1;


for (let i = 0; i < size1; i++) {
    let value1 = prompt(`Enter value #${i + 1}: `);
    intValue1 = parseInt(value1);
    numberArray1.push(intValue1);
}

const numberArray2 = [];
const size2 = prompt("Enter the size of the second array: ");
let intValue2;


for (let i = 0; i < size2; i++) {
    let value2 = prompt(`Enter value #${i + 1}: `);
    intValue2 = parseInt(value2);
    numberArray2.push(intValue2);
}

function mergeSortedArrays(arr1, arr2) {
    const arr3 = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr3.push(arr1[i])
            i++;
        }
        else {
            arr3.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        arr3.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        arr3.push(arr2[j]);
        j++;
    }
    return arr3;
}

const numberArray3 = mergeSortedArrays(numberArray1, numberArray2)
console.log(numberArray3);