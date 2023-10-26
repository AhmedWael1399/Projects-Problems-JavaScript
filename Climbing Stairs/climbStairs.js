function climbStairs(n) {
    let arr = [1, 1];
    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return arr[n];
}


const numberOfStairs = 7;
console.log(climbStairs(numberOfStairs));
