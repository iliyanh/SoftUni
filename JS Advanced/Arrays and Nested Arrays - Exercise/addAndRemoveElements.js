function addAndRemoveElements(array) {

    let output = []

    for (let i = 1; i <= array.length; i++) {
        let command = array[i - 1];


        command === "add" ? output.push(i) : output.pop()
    }


    output.length === 0 ? console.log('Empty') : console.log(output.join('\n'))

}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']);
addAndRemoveElements(['remove',
    'remove',
    'remove']);