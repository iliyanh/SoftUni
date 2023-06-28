function movieProfit(input){

    let movieName = input[0];
    let screeningDays = Number(input[1]);
    let ticketsSold = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let percentForCinema = Number(input[4]);


    let dayProfit = ticketsSold * ticketPrice;
    let totalTicketPrice = dayProfit * screeningDays;

    let revenue = totalTicketPrice - (totalTicketPrice * percentForCinema / 100);
    console.log(`The profit from the movie ${movieName} is ${revenue.toFixed(2)} lv.`);


}
movieProfit(["Python Basics ",
    40,
    34785,
    10.45,
    14,
    ])