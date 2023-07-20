function vacation(people, group, day) {
    
    let totalPrice = 0;

    switch (day) {
        case "Friday":
            switch (group) {
                case "Students":
                    totalPrice = people * 8.45;
                        if (people >= 30) {
                            totalPrice *= 0.85;
                        }
                    break;
                case "Business":
                    if (people >= 100) {
                        people -= 10;
                    }
                    totalPrice = people * 10.90;
                    break;
                case "Regular":
                    totalPrice = people * 15;
                    if (people >= 10 && people <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;
        case "Saturday":
            switch (group) {
                case "Students":
                    totalPrice = people * 9.80;
                        if (people >= 30) {
                            totalPrice *= 0.85;
                        }
                    break;
                case "Business":
                    if (people >= 100) {
                        people -= 10;
                    }
                    totalPrice = people * 15.60;
                    break;
                case "Regular":
                    totalPrice = people * 20;
                    if (people >= 10 && people <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;
        case "Sunday":
            switch (group) {
                case "Students":
                    totalPrice = people * 10.46;
                        if (people >= 30) {
                            totalPrice *= 0.85;
                        }
                    break;
                case "Business":
                    if (people >= 100) {
                        people -= 10;
                    }
                    totalPrice = people * 16;
                    break;
                case "Regular":
                    totalPrice = people * 22.50;
                    if (people >= 10 && people <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;

    }
    let finalSum = totalPrice.toFixed(2)
    console.log(`Total price: ${finalSum}`);

}
vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")
vacation(100, "Business", "Saturday")
