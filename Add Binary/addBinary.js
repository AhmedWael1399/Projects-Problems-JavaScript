function addBinary(a, b) {
    let numArray1 = a.split("");
    let numArray2 = b.split("");
    let sum = 0;
    let carry = 0;
    let temp;
    if (numArray1.length > numArray2.length) {
        for (let i = numArray1.length - 1; i > 0; i--) {
            for (let j = numArray2.length - 1; j > 0; j--) {
                if (numArray1[i] === numArray2[j] === "1") {
                    temp = 0;
                    carry = 1;
                }
            }
        }

    }
    const firstNumber = "11";
    const secondNumber = "1";
    console.log(addBinary(firstNumber, secondNumber))