function centuriesToMinutes(num){

    let centurieInYears = num * 100;
    let days = Math.trunc(centurieInYears * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${num} centuries = ${centurieInYears} years = ${days} days = ${hours} hours = ${minutes} minutes`);


}
centuriesToMinutes(1);
centuriesToMinutes(5);