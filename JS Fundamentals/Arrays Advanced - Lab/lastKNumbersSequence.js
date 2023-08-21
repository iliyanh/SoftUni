

function generateSequence(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let newArr = arr.slice(startIndex, i);
        let nextElement = newArr.reduce((a, b) => a + b, 0);
        arr.push(nextElement);
    }
    return arr.join(" ");
}
console.log(generateSequence(6, 3));
console.log(generateSequence(8, 2));