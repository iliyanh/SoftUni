function deleteByEmail() {
    const textArea = document.querySelector("input").value;
    //const textValue = textArea.value;
    let emailToBeDeleted = document.querySelectorAll(" #customers tr td:nth-child(2)")

    for (const td of emailToBeDeleted) {
        if(td.textContent == textArea ){
            let row = td.parentNode;
            row.parentNode.removeChild(row);
            document.getElementById("result").textContent = "Deleted";
            return 
        }
    }
    return document.getElementById("result").textContent = "Not found";

}
