function solve() {
  const inputText = document.getElementById("input").value;
  const element = document.getElementById("output")
  const formatText = inputText
    .split(".")
    .filter((s) => s !== "")
    .map((s) => s + ".");
  const paragraphRoof = Math.ceil(formatText.length / 3);

  for (let index = 0; index < paragraphRoof; index++) {
    const joinedSentence = formatText.splice(0, 3).join("");
    element.innerHTML += `<p>${joinedSentence}</p>`


  }

}
