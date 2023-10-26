function mySqrt(x) {
    if (x === 0) {
        return 0;
    }
    let guess = x;
    let prevGuess;

    while (true) {
        prevGuess = guess;
        guess = (x / guess + guess) / 2;

        if (Math.abs(guess - prevGuess) < 0.00001) {
            return Math.floor(guess);
        }
    }
}
const num = 8;
console.log(mySqrt(num));