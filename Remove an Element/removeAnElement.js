function removeElement(nums, val) {
    let k = 0;
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (val != nums[i]) {
            k++;
        }
        else if (val == nums[i]) {
            let j = i;
            while (j < nums.length - 1) {
                temp = nums[j];
                nums[j] = nums[j + 1]
                nums[j + 1] = temp;
                j++;
            }
            nums.length--;
            i--;
        }
    }
    return k;
}
const inputNumberArray = [3, 2, 2, 3];
const value = 2;
console.log(removeElement(inputNumberArray, value));