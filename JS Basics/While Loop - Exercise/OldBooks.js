function oldBooks(input) {
    let favoriteBook = input[0];
    let counter = 0;
    let index = 1;
    let checkedBooks = input[index];
    let bookIsFound = false;
    while (checkedBooks !== "No More Books") {
        if (checkedBooks === favoriteBook) {
            bookIsFound = true;
            break;
        }
        counter++;
        index++;
        checkedBooks = input[index];

    }
    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    } else {
    console.log(`You checked ${counter} books and found it.`);
    }
    
}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])








