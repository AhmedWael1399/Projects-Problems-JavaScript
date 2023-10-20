const arr = [1, 1];
let freqArray = new Array(Math.max(...arr) + 1).fill(0);

for (let i = 0; i < arr.length; i++) {
    freqArray[arr[i]]++;
}
console.log(freqArray[2]);