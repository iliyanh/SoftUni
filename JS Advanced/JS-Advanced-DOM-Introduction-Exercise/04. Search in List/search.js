function search() {

   let towns = document.querySelectorAll("#towns li");
   let searchTextArea = document.querySelector("input").value;
   let result = document.getElementById("result")
   
   let sum = 0;

   for (const li of towns) {
      let searchTextAreaToLower = searchTextArea.toLowerCase();
      let liToLowerCase = li.textContent.toLowerCase();
      
      if(liToLowerCase.includes(searchTextAreaToLower)){
         li.style.fontWeight = "bold";
         li.style.textDecoration = "underline";
         sum++; 
      } else {
         li.style.fontWeight = "";
         li.style.textDecoration = "";
      }
   }
   return result.textContent = `${sum} matches found`

}
