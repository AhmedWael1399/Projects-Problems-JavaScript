'use strict'
const prompt = require("prompt-sync")();

let word = prompt("Enter string to be reversed: ");
let wordArray = [...word];

function stringReverseUsingArray(string) {
    let stringArray = [];
    let i = 0;
    while (i < string.length) {
        stringArray.push(string[(string.length - 1) - i]);
        i++;
    }
    return stringArray.join('');
}

const reversedWord = stringReverseUsingArray(wordArray);
console.log(reversedWord)