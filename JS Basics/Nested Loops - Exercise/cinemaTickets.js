function cinemaTickets(input){

    let index = 0;
    let command = input[index];
    let name = "";
    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTickets = 0;
    let emptySpaces = 0;
    let ticketType = 0;
    
    while(command !== "Finish"){
        let ticketsInPercent = 0;
        let totalTickets = 0;
        name = command;
        index++;
        emptySpaces = Number(input[index]);
        index++;
        ticketType = input[index];
        while(ticketType !== "End"){
            
            totalTickets++;
            switch(ticketType){
                case "standard": standardTickets++; break;
                case "student": studentTickets++; break;
                case "kid": kidsTickets++; break;
            }
            if (totalTickets >= emptySpaces){
                break;
            }
            index++;
            ticketType = input[index];
            if(ticketType === "Finish"){
                break;
            }
        }
        ticketsInPercent = totalTickets / emptySpaces * 100;
        console.log(`${name} - ${ticketsInPercent.toFixed(2)}% full.`)
        if(ticketType === "Finish"){
            break;
        }
        index++;
        command = input[index];
    }
    let totalTicketsinOutput = standardTickets + studentTickets + kidsTickets;
    console.log(`Total tickets: ${totalTicketsinOutput}`);
    console.log(`${(studentTickets / totalTicketsinOutput * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTicketsinOutput * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsTickets / totalTicketsinOutput * 100).toFixed(2)}% kids tickets.`);
 



}
cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

