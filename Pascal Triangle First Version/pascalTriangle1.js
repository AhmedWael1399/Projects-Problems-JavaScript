const numRows = 5;
const triangle = [];

const generatePascalTriangle = function (num) {
    for (let i = 0; i < num; i++) {
        const rows = [];
        rows[0] = 1;
        for (let j = 1; j < i; j++) {
            rows[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        if (i > 0) {
            rows[i] = 1;
        }
        triangle.push(rows);
    }
    return triangle;
}
const result = generatePascalTriangle(numRows);
console.log(result);