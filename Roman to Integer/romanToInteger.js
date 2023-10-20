function romanToInt(s) {
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let result = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanValues[s[i]];
        if (i < s.length - 1 && currentValue < romanValues[s[i + 1]]) {
            result -= currentValue;
        }
        else {
            result += currentValue;
        }
    }
    return result;
}

const string = romanToInt("MCMXCIV");
console.log(string);