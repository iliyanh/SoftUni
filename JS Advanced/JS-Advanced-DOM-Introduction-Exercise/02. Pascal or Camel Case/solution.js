function solve() {

  const CAMEL_CASE = "Camel Case";
  const PASCAL_CASE = "Pascal Case";

  let input = document.getElementById("text").value.toLowerCase()
  let currentCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  let currentText = input.split(" ");


  if (currentCase !== PASCAL_CASE && currentCase !== CAMEL_CASE) {
    result.textContent = "Error!"
    return
  }
  let out = "";
  let startingPoint = 0;

  if (currentCase === CAMEL_CASE) {
    out += currentText[0];
    startingPoint++;
  }

  for (let i = startingPoint; i < currentText.length; i++) {
    let currentWord = currentText[i]

    out += currentWord[0].toUpperCase() + currentWord.slice(1)

  }
  result.textContent = out;



}