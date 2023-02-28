function cinema(input){
    let type = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);
    let income = 0;

    if (type === "Premiere"){
        income = (rows * colums) * 12;
        console.log(income.toFixed(2));

    } else if (type === "Normal"){
        income = (rows * colums) * 7.50;
        console.log(income.toFixed(2));


    } else if (type === "Discount"){
        income = (rows * colums) * 5;
        console.log(income.toFixed(2));


    }
}
cinema(["Discount",
"12",
"30"])

