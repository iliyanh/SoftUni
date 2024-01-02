function matchDays(data){

    const regex = /\b(?<day>\d{2})([-./])(?<month>[A-Z][a-z]+)\2(?<year>\d{4})\b/gm;

  let result;
    
    while ((result = regex.exec(data)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        let day = result.groups.day;
        let month = result.groups.month;
        let year = result.groups.year;


        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        
        
    }
    
}
matchDays(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
matchDays(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);