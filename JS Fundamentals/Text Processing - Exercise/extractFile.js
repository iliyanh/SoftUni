function extractFile(text){

start = text.lastIndexOf("\\")

let nameAndExtension = text.substring(start + 1)

start = nameAndExtension.lastIndexOf(".")

let name = nameAndExtension.substring(0,start);
let extension = nameAndExtension.substring(start + 1)

console.log(`File name: ${name}`);
console.log(`File extension: ${extension}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');