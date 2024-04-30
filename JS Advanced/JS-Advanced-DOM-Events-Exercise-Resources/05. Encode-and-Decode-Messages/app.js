function encodeAndDecodeMessages() {
    const textArea = document.querySelectorAll("textArea");
    const button = document.querySelectorAll("button");

    button[0].addEventListener("click" , encode);
    button[1].addEventListener("click" , decode);

    function encode(){

        let encodeMessage = "";
        const input = textArea[0].value;
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            encodeMessage += String.fromCharCode(element.charCodeAt(0) + 1);

        }
        textArea[1].value = encodeMessage;
        textArea[0].value = "";

    }
    function decode(){

        let decodeMessage = "";
        const input = textArea[1].value;
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            decodeMessage += String.fromCharCode(element.charCodeAt(0) - 1);

        }
        textArea[1].value = decodeMessage;
        

    }
    
}