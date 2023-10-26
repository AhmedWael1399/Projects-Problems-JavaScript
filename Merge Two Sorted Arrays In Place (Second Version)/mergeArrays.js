function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

const numberArray1 = [1, 3, 5, 7];
const numberArray2 = [2, 4, 6, 8];

merge(numberArray1, numberArray1.length, numberArray2, numberArray2.length);

console.log(numberArray1);