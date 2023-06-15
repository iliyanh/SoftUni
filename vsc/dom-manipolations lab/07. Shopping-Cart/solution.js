function solve() {
   document.getElementsByClassName("shopping-cart")[0].addEventListener("click", onClick);
   document.getElementsByClassName("checkout")[0].addEventListener("click", checkOut);
   const cart = [];
   const output = document.getElementsByTagName("textarea")[0];

   let checkOutDone = false
   function onClick(event){
      if(checkOutDone){
         return
      }
      if(event.target.tagName == "BUTTON" && event.target.classList.contains("add-product")){
         const product = event.target.parentNode.parentNode;
         const name = product.querySelector(".product-title").textContent;
         const price = Number(product.querySelector(".product-line-price").textContent);

         cart.push({
            name,
            price
         });

         output.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
      }
   }
   function checkOut(){
      if(checkOutDone){
         return
      }
      const products = new Set();
      cart.forEach(prd => products.add(prd.name));

      const total = cart.reduce((t, c) => t + c.price, 0);
      output.textContent += `You bought ${[...products.keys()].join(", ")} for ${total.toFixed(2)}.`
      checkOutDone = true;
   }
}