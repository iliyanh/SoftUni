function extractText() {
    let list = document.getElementsByTagName("li")
    let listArray = Array.from(list);
    let allText = listArray.map((x) => x.textContent);
    console.log(allText);

    let textArea = document.getElementById("result")
    textArea.value = allText.join("\n")

}