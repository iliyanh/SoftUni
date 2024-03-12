function solution(input){
    result = [];
    
    let listProces = {
        add: (text) => result.push(text),
        remove: (text) => result = result.filter(element => element !== text),
        print: () => console.log(result.join(","))

    }

    input.forEach(element => {
        const [command, text] = element.split(" ");
        listProces[command](text);

    });
}
solution(['add hello', 'add again', 'remove hello', 'add again', 'print'])