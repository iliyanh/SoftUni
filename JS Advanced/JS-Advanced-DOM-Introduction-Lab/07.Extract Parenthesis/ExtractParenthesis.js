function extract(content) {

    let para = document.getElementById(content).textContent;
    let regex = /\(([^)]+)\)/g
    let result = []

    let match = regex.exec(para)
    while(match){
        result.push(match[1]);
        match = regex.exec(para)

    }
    
    return result.join("; ")
    
}