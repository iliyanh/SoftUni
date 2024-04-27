function colorize() {
    let elements = document.querySelectorAll("tr")

    let index = 0;
    for (const el of elements) {
        index++;
        if(index % 2 === 0){
            el.style.background = "teal"
        }
    }
}