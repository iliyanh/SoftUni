function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   let rows = document.querySelectorAll("tbody tr")
   

   function onClick() {
      let inputToLowerCase = document.getElementById("searchField").value.toLowerCase();

      for (const row of rows) {
         let rowToLowerCase = row.textContent.toLowerCase();

         if(rowToLowerCase.includes(inputToLowerCase)){
            row.setAttribute("class", "select")
         } else {
            row.removeAttribute('class')
         }
      }
   }
}