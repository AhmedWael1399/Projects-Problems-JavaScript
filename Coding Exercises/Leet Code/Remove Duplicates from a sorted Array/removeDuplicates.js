'use strict'

let numberArray = [1, 1, 2, 3, 4, 4];

function removeDuplicates(arr) {

    let ctr;
    for (let i = 0; i < arr.length; i++) {
        let size = arr.length;
        for (let j = i + 1; j < size; j++) {
            if (arr[j] == arr[i]) {
                arr[j] = arr[j + 1];
            }
        }
    }
    return arr;
}
console.log(removeDuplicates(numberArray));
