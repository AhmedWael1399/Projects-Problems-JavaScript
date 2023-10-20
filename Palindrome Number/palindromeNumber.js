'use strict'

let number = -121;
let numberValue;


function isPalindrome(value) {
    let valueNumber;
    let values = [];
    let flag = 0;
    if (value < 0)
        return false;
    else if (value == 0)
        return true;
    else {
        while (value != 0) {
            valueNumber = value % 10;
            value = Math.floor(value / 10);
            values.push(valueNumber);
        }
        for (let i = 0; i < values.length; i++) {
            if (values[i] == values[(values.length - 1) - i]) {
                flag = 1;
            }
            else {
                return false;
            }
        }
        if (flag == 1)
            return true;
    }

}

isPalindrome(number);