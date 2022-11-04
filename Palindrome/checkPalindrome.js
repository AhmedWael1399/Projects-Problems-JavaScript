'use strict'
const prompt = require("prompt-sync")();

const wordPhrase = prompt("Enter the word you want to check: ");


function checkPalindrome(word) {
    let flag = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == word[(word.length - 1) - i]) {
            flag = 1;
        }
        else {
            console.log(`The word ${word} is not a palindrome`);
            break;
        }

    }
    if (flag == 1)
        console.log(`The word ${word} is a palindrome.`);
}

checkPalindrome(wordPhrase);



