function revealWords(words, text) {

    let word = words.split(", ")
    let sentence = text.split(" ")
    

    for (let i = 0; i < sentence.length; i++) {

        if (sentence[i].includes("*")) {

            for (let element of word) {
                if (element.length === sentence[i].length) {
                    sentence[i]= element
                }
            }
        }
    }
    console.log(sentence.join(" "));

}
revealWords('great',
    'softuni is ***** place for learning new programming languages'
);
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);