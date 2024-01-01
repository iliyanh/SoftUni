function valueOfAString(text) {

    let string = text[0];
    let command = text[1];
    let result = 0;

    for (let i = 0; i < string.length; i++) {
        let currentChar = string[i];
        if (command === "LOWERCASE") {
            if (currentChar == currentChar.toLowerCase() &&
                currentChar.charCodeAt(0) > 96 && currentChar.charCodeAt(0) < 123) {
                let num = currentChar.charCodeAt(0)
                result += num
            }
        } else if (command === "UPPERCASE") {
            if (currentChar == currentChar.toUpperCase() &&
                currentChar.charCodeAt(0) > 64 && currentChar.charCodeAt(0) < 91) {
                let num = currentChar.charCodeAt(0)
                result += num
            }
        }
    }
    console.log(`The total sum is: ${result}`);

}
valueOfAString(['HelloFromMyAwesomePROGRAM','LOWERCASE']);
valueOfAString(['AC/DC','UPPERCASE']);