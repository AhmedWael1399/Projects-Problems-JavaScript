'use strict'

const arr = [[], [], []]
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        arr[i].push('*')
    }
}
console.log(arr)