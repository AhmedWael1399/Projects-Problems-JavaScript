function isPalindrome(s) {
    if (s.trim() === "") return true;
    let newS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let flag = true;

    for (let i = 0; i < Math.floor(newS.length / 2); i++) {
        if (newS[i] !== newS[newS.length - 1 - i]) {
            flag = false;
            break;
        }
    }

    return flag;
}

const s = "a";
console.log(isPalindrome(s)); 
