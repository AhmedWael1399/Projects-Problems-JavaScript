function plusOne(digits) {
    let i = digits.length - 1;
    let carry = 1;

    while (i >= 0) {
        digits[i] += carry;
        carry = Math.floor(digits[i] / 10);
        digits[i] %= 10
        i--;
    }

    if (carry > 0) {
        digits.unshift(carry);
    }
    return digits;
}

const numberArray = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(numberArray));

// **********************************************************************************************

// Another Defected Solution

// function plusOne(digits) {
//     let wholeNumber = digits.join("");
//     console.log(wholeNumber)
//     let integerNumber = parseInt(wholeNumber);
//     console.log(integerNumber)
//     integerNumber++;
//     console.log(integerNumber)
//     let stringDigits = integerNumber.toString();
//     console.log(stringDigits)
//     let newArray = stringDigits.split("")
//     console.log(newArray)
//     return newArray
// }

// const numberArray = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
// console.log(plusOne(numberArray));

// **********************************************************************************************

//Another Solution but a Defected One

// function plusOne(digits) {
//     let increment = 10;
//     let result = digits[0];
//     let numberDigits = [];
//     let shiftedNumberArray = [];
//     let singleDigit;
//     let stringDigits;
//     let dividedNumber;
//     let wholeNumber;
//     let integerNumber;
//     let i = 1;
//     while (i < digits.length) {
//         result = result * increment + digits[i];
//         i++;
//     }
//     result++;
//     stringDigits = result.toString();
//     dividedNumber = stringDigits.split("");

//     if (dividedNumber.length > digits.length) {
//         wholeNumber = dividedNumber.join("");
//         integerNumber = parseInt(wholeNumber);
//         for (i = dividedNumber.length - 1; i >= 0; i--) {
//             singleDigit = integerNumber % increment;
//             integerNumber = Math.floor(integerNumber / increment);
//             numberDigits.push(singleDigit);
//         }
//         while (numberDigits.length !== 0) {
//             shiftedNumberArray.push(numberDigits.pop());
//         }
//         return shiftedNumberArray;
//     } else {
//         wholeNumber = dividedNumber.join("");
//         integerNumber = parseInt(wholeNumber);
//         for (i = digits.length - 1; i >= 0; i--) {
//             singleDigit = integerNumber % increment;
//             integerNumber = Math.floor(integerNumber / increment);
//             numberDigits.push(singleDigit);
//         }
//         while (numberDigits.length !== 0) {
//             shiftedNumberArray.push(numberDigits.pop());
//         }
//         return shiftedNumberArray;
//     }
// }