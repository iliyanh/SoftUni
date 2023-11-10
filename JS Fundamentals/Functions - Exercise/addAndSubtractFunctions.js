function addAndSubtract(a,b,c){
    let add = sum(a,b);
    let minus = substract(add, c)


    function sum(a,b){
        return a+b
        
    }

    function substract(a,b){
        return a-b
    }
    return minus
}
console.log(addAndSubtract(23,6,10));
console.log(addAndSubtract(1,17,30));
console.log(addAndSubtract(42,58,100));