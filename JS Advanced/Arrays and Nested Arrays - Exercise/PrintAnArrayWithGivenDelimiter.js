function printArrayWithDelimiter(array, delimiter){

    let output = array.join(delimiter);
    console.log(output);

}
printArrayWithDelimiter(['One',
'Two',
'Three',
'Four',
'Five'],
'-');
printArrayWithDelimiter(['How about no?',
'I',
'will',
'not',
'do',
'it!'],
'_');