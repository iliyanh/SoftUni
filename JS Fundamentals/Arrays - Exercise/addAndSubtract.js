function addAndSubtract(array){


    let newArr = [];
    let sumOfOldArray = 0;
    let sumOfNewArray = 0;

    for(let i = 0; i < array.length; i++){
        let num = array[i];
        sumOfOldArray += num;
        if (num % 2 === 0){
            num = num + i;
            newArr.push(num);
            sumOfNewArray += num;
        } else {
            num = num - i;
            newArr.push(num);
            sumOfNewArray += num;
        }

    }
    console.log(newArr);
    console.log(sumOfOldArray);
    console.log(sumOfNewArray);

}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);