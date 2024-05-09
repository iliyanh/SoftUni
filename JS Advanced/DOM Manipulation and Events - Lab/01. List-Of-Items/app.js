function addItem() {
    let input = document.getElementById("newItemText")
    let inputValue = input.value;

    let ul = document.getElementById("items");
    let newLi = document.createElement("li")
    newLi.textContent = inputValue
    ul.appendChild(newLi);

}