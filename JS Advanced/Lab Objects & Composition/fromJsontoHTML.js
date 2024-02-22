function convert(jsonString){

    let array = JSON.parse(jsonString);
    let output = "<table>\n"
     let obj = array[0];
    output += "<tr>"
    for( let key in obj){
        output += `<th>${key}</th>`
    }
    output +="</tr>\n"
    for(let obj of array){
        output +="<tr>"
        for(let key in obj){
            output += `<td>${obj[key]}</td>`
            
        }
        output +="</tr>\n"
    }
    function escapeHtml(el){
        return el
        .toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/ /g, "&nbsp")
    }
    
    output += "</table>"

    output = escapeHtml(output);
    return output
}
convert(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);



/*<table>
 <tr><th>Name</th><th>Score</th></tr>
 <tr><td>Stamat</td><td>5.5</td></tr>
 <tr><td>Rumen</td><td>6</td></tr>
</table>*/