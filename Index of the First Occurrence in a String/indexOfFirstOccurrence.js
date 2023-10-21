function strStr(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {

            if (haystack.substring(i, i + needle.length) === needle) {
                return i;
            }
        }
    }

    return -1; // Needle not found in the haystack
}

const string1 = "mississippi";
const string2 = "issip";
console.log(strStr(string1, string2));