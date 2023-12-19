function substring(text, startIndex, count) {
    let endIndex = startIndex + count;

    let result = text.substring(startIndex, endIndex);
    console.log(result);
}
substring('ASentence', 1, 8);