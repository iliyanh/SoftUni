function coffeeLover(arr){

    let coffees = arr.shift().split(" ");
    let commands = arr.shift()


   for(let i = 0; i < commands; i++){
    let nextLine = arr.shift().split(" ");
    let currentCommand = nextLine.shift();
    let element = nextLine.shift();

        switch(currentCommand){
            case "Include":
                coffees.push(element);
                break;
            case "Remove":
                let index = Number(nextLine);
                if(element === "first"){
                    coffees.splice(0, index);
                } else {
                    coffees.splice(-index);
                }
                break;
            case "Prefer":
                element = Number(element);
                let swapIndex = Number(nextLine);
                if(element >= 0 && element < coffees.length && swapIndex >= 0 && swapIndex < coffees.length){
                    let temp = coffees.splice(element, 1 , coffees[swapIndex]);
                    coffees.splice(swapIndex, 1, temp[0])
                } else {
                    continue;
                }
                break;
            case "Reverse":
                coffees.reverse();
                break;

        }
   }
   return `Coffees:\n` +
   `${coffees.join(" ")}`



}
console.log(coffeeLover((["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
"5",
"Include TurkishCoffee",
"Remove first 2",
"Remove last 1",
"Prefer 3 1",
"Reverse"])
));
console.log(coffeeLover((["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
"5",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 0 1",
"Prefer 3 1",
"Reverse"])
));
console.log(coffeeLover((["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
"3",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 4 1"])
));