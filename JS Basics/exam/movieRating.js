function movieRating(input){

    let movieCount = Number(input[0]);
    let index = 1;
    let totalRating = 0;
    let currentHighRating = Number.MIN_SAFE_INTEGER;
    let currentLowRating = Number.MAX_SAFE_INTEGER;
    let highRatingName = "";
    let lowRatingName = "";


    for(let currentMovie = 1; currentMovie <= movieCount; currentMovie++){
        let movieName = input[index];
        index++;
        let rating = Number(input[index]);
        totalRating += rating;

        if(rating > currentHighRating){
            currentHighRating = rating;
            highRatingName = movieName;
        } else if(rating < currentLowRating){
            currentLowRating = rating;
            lowRatingName = movieName;
        }
        index++;
    }  
    
    let averageRating = totalRating / movieCount;
    
    console.log(`${highRatingName} is with highest rating: ${currentHighRating.toFixed(1)}`);
    console.log(`${lowRatingName} is with lowest rating: ${currentLowRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);


}
movieRating([ 3,
    "Interstellar",
    8.5,
    "Dangal",
    8.3,
    "Green Book",
    8.2,
    ])