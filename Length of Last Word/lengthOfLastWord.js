function lengthOfLastWord(s) {
    let newWords = s.split(" ");
    let i = newWords.length - 1;
    let extractedWord = [];

    while (i >= 0 && newWords[i] === "") {
        i--;
    }

    if (i >= 0) {
        for (let j = newWords[i].length - 1; j >= 0; j--) {
            extractedWord.push(newWords[i][j])
        }
        return extractedWord.length
    }
    else return 0;
}
const sentence = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(sentence));