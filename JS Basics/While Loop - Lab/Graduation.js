function graduation(input){
    let name = input[0];
    let index = 1;
    let grade = 1;
    let totalGrades = 0;
    let excluded = 0;

    while(grade <= 12){
        let currentGrades = Number(input[index]);
        totalGrades += currentGrades;
        index++;
        grade++;

            if (currentGrades < 4){
                grade = grade -1;
                excluded++;
            }
            if (excluded >= 2){
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }
    
        }
            if (grade === 13){
                console.log(`${name} graduated. Average grade: ${(totalGrades / 12).toFixed(2)}`);
            } 
            
   

}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])




