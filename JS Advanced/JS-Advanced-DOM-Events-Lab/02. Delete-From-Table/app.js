function deleteByEmail() {
    console.log('TODO:...');
    let rows = document.querySelectorAll("tr")
    let textArea = document.querySelector('input').value;
    let result = document.querySelector("result");

    console.log(rows);
    for (const row of rows) {
        let rowToLowerCase = row.textContent.toLowerCase();
        let textToLower = textArea.toLowerCase();

        if(rowToLowerCase.includes(textToLower)){
            row.remove()
            result.textContent = "Deleted"
        } else {
            result.value = "Not Found"
        }
    }

}