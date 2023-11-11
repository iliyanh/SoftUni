function loadingBar(num) {
    let buff = 0;
    let percentage = 0;
    let array = [];
    let temp = 0;

    for (let i = 0; i < num; i++) {
        buff++

        if (buff === 10) {
            percentage += buff;
            buff = 0;

        }
    }
    for (let j = 1; j <= 10; j++) {
        if ((percentage / 10) >= j) {
            array.push("%");
        } else {
            array.push(".")
        }
    }
    let string = "";
    for (let k = 0; k < array.length; k++) {
        string += array[k] + "";
    }
    if (percentage === 100) {
        console.log("100% Complete!");
        console.log(`[${string}]`);
    } else {
        console.log(`${percentage}% [${string}]`);
        console.log("Still loading...");
    }

}
loadingBar(30);
loadingBar(50);
loadingBar(100);