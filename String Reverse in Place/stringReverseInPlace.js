'use strict'
const prompt = require("prompt-sync")();

let word = prompt("Enter string to be reversed: ");
let wordArray = [...word];

function stringReverseInPlace(string) {
    let temp;
    let i = 0;
    while (i < string.length / 2) {
        temp = string[i];
        string[i] = string[(string.length - 1) - i];
        string[(string.length - 1) - i] = temp;
        i++;
    }
    return string.join('');
}

const reversedWord = stringReverseInPlace(wordArray);
console.log(reversedWord)