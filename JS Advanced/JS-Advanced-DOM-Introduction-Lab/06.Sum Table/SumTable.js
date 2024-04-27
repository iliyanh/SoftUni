function sumTable() {

    let elements = document.querySelectorAll("table tr")
    let total = 0;

    for (let index = 1; index < elements.length; index++) {
        let cols = elements[index].children;
        let cost = cols[cols.length - 1].textContent;
        total += Number(cost);
    }
    document.getElementById("sum").textContent = total
   
}