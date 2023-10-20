
let numberArray = [1, 1, 2, 2, 3];

function removeDuplicates(nums) {
    let ctr = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[ctr - 1]) {
            nums[ctr] = nums[i];
            ctr++;
        }
    }
    return ctr;
}

console.log(removeDuplicates(numberArray));
