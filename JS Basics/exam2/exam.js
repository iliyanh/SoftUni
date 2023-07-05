function exam(input){

    let students = Number(input[0]);
    let index = 1;
    let topGroup = 0;
    let secondGroup = 0;
    let thirdGroup = 0;
    let lastGroup = 0;
    let totalgrades = 0;
    
    for( let currentGrades = 1; currentGrades <= students; currentGrades++){
        let grades = Number(input[index]);
        totalgrades += grades;

        if (grades >= 5.00){
            topGroup++;
        } else if (grades >= 4.00 && grades <= 4.99){
            secondGroup++;
        } else if (grades >= 3.00 && grades <= 3.99){
            thirdGroup++;
        } else if (grades < 3){
            lastGroup++;
        }

        index++;
        grades =  Number(input[index]);
    }

    let topStudentsPercentage = topGroup / students * 100;
    let secondStudentsPercentage = secondGroup / students * 100;
    let thirdStudentsPercentage = thirdGroup / students * 100;
    let lastStudentsPercentage = lastGroup / students * 100;
    let averageGrades = totalgrades / students;

    console.log(`Top students: ${topStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${secondStudentsPercentage.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${thirdStudentsPercentage.toFixed(2)}%`);
    console.log(`Fail: ${lastStudentsPercentage.toFixed(2)}%`);
    console.log(`Average: ${averageGrades.toFixed(2)}`);
  
}
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

