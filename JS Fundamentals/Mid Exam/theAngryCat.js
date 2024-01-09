function theAngryCat(arr, start, itemValue) {
    let leftSum = 0;
    let rightSum = 0;

    for(let i = start - 1; i >= 0 ; i--){
        if(itemValue === "cheap"){
            if(arr[i] < arr[start]){
                leftSum += arr[i]
            }
        } else if (itemValue === "expensive"){
            if(arr[i] >= arr[start]){
                leftSum += arr[i];
            }    
        }
    }

    for(let j = start + 1; j <= arr.length; j++){
        if(itemValue === "cheap"){
            if(arr[j] < arr[start]){
                rightSum += arr[j]
            }
        } else if (itemValue === "expensive"){
            if(arr[j] >= arr[start]){
                rightSum += arr[j];
            }    
        }
    }

    if (leftSum === rightSum || leftSum > rightSum){
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`);
    }
    

    

}
theAngryCat([1, 5, 1],1,"cheap");
theAngryCat([5, 10, 12, 5, 4, 20],3,"cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],7,"expensive");