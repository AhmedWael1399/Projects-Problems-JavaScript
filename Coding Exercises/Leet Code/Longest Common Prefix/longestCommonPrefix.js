'use strict'

const arrayOfStrings = ["flower", "flow", "flight"];

//console.log(arrayOfStrings[2][4])

function longestCommonPrefix(words) {
    let prefixArray = [];
    const emptyString = "";
    let j = 0;
    for (let i = 0; i < words.length; i++) {

        while (words[i][j] == words[i + 1][j]) {
            prefixArray.push(words[i][j]);
            console.log(prefixArray);

            if (words[i][j] != words[i + 1][j]) {
                return emptyString
            }
            j++;
        }
    }
    console.log(prefixArray);
    //return prefixArray;
}

longestCommonPrefix(arrayOfStrings);
