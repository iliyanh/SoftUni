function addItem() {
    let input = document.getElementById("newItemText")
    let inputValue = input.value;

    let ul = document.getElementById("items");
    let newLi = document.createElement("li")
    newLi.textContent = inputValue
    
    let deleteLink = document.createElement('a');
    deleteLink.textContent = "Delete"
    deleteLink.addEventListener("click" , deleteEl)
    newLi.appendChild(deleteLink);
    
    ul.appendChild(newLi);
    function deleteEl(e){
        newLi.remove()
    }

}