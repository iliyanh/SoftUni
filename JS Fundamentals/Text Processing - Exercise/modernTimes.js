
function modernTimes(text) {
    let buff = text.split(" ")
    let result = []

    for (let el of buff) {
        if (el.startsWith("#") && el.length > 1) {
            el = el.substring(1)
            let isSpecial = true

            for (let ch of el) {
                ch = ch.toLowerCase()
                if (ch.charCodeAt(0) < 97 || ch.charCodeAt(0) > 122) {
                    isSpecial = false;
                    break;
                }
            }
            if (isSpecial) {

                result.push(el)
            }
        }
    }

    console.log(result.join("\n"));

}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');