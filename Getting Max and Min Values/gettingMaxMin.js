'use strict';




function getMaxMinValue(arr) {
    let maxElement = arr[0];
    let minElement = arr[0];
    let i = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) maxElement = arr[i]
        else if (arr[i] < minElement) minElement = arr[i]
    }
    return { maxElement, minElement }
}

const data1 = [5, 30, 2, 6, 7, -1];
const data2 = [100, 30, -50, -1, 2, 8, 9, 12, 45];

console.log(getMaxMinValue(data1));
console.log(getMaxMinValue(data2));