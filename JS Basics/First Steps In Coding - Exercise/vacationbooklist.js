function vacationBookList(input){
    let bookLists = Number(input[0]);
    let listsPerH = input[1];
    let days = input[2];

    let totalTime = bookLists / listsPerH;
    let timePerDay = totalTime / days;
    console.log(timePerDay);
}
vacationBookList([212, 20, 2]);