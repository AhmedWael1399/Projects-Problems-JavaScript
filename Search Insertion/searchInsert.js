function searchInsert(nums, target) {
    let flag = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            flag = 1;
            return i;
        }
    }
    if (flag == 0) {
        for (let i = 0; i < nums.length; i++) {
            if (target < nums[i]) {
                nums.splice(i, 0, target);
                return i;
            }
            else if (nums[i] < target && target < nums[i + 1]) {
                nums.splice((i + 1), 0, target)
                return i + 1;
            }
        }
        if (target > nums[nums.length - 1]) {
            nums.push(target);
            return nums.indexOf(target);
        }
    }
}
const numbers = [1, 3, 5, 6];
const value = 2;
console.log(searchInsert(numbers, value));


