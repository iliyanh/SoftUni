function sortAnArrayBy2Criteria(arr){

    let newArr = arr.sort((a, b) => {
        if(a.length - b.length === 0){
            return a.localeCompare(b);
        }
        
        return a.length - b.length;
    });

    console.log(newArr.join("\n"));
    
    
    
    


}
sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortAnArrayBy2Criteria(["test",
    "Deny",
    "omen",
    "Default",]);