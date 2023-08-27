function rightPlace(string, char, target){

    let result = string.replace("_", char)

    console.log(result === target ? "Matched": "Not Matched");


}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')