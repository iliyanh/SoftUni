function reverseInPlace(array){
let result = []
for(let i = array.length - 1; i >= 0 ; i--){
    result += `${array[i]} `;
}
console.log(result);

}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])