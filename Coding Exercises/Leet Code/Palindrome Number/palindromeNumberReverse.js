'use strict'

let number = 121;

function isPalindrome(value) {
    let storedValue = value;
    let valueNumber;
    let reverse = 0;
    if (value < 0)
        return false;
    else {
        while (value != 0) {
            valueNumber = value % 10;
            reverse = reverse * 10 + valueNumber;
            value = Math.floor(value / 10);
        }
    }
    if (storedValue == reverse)
        return true
    else return false;
}
isPalindrome(number);