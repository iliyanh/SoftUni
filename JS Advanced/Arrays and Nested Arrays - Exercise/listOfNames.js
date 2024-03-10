function listOfNames(arr) {

    let sortedArray = arr.sort((a, b) => a.localeCompare(b));

    for (let i = 1; i <= sortedArray.length; i++) {
        let currentElement = sortedArray[i - 1];

        console.log(`${i}.${currentElement}`);
    }

}
listOfNames(["John",
    "Bob",
    "Christina",
    "Ema"]);