function sortBySecondCriteria(arr) {

    let sortedArray = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))

    console.log(sortedArray.join("\n"));

}
sortBySecondCriteria(['alpha',
    'beta', 'gamma']);
sortBySecondCriteria(['Isacc',
    'Theodor', 'Jack',
    'Harrison',
    'George']
);
sortBySecondCriteria(['test',
    'Deny', 'omen',
    'Default']);