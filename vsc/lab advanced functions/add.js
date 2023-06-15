function solution(num){
    let number = num;

    function adder(value) {
        let result = number + value
        return result
    }
    return adder
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));