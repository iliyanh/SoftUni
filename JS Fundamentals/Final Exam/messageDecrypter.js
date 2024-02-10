function messageDecrypter(data) {
    let messageCount = data.shift();
  
    for (let i = 0; i < messageCount; i++) {
      let currentLine = data[i];
  
      let regex = /^([$%])(?<name>[A-Z][a-z]{2,})\1\: \[(?<firstGroup>\d+)\]\|\[(?<secondGroup>\d+)\]\|\[(?<thirdGroup>\d+)\]\|$/g
      let match = regex.exec(currentLine);
  
      if (match !== null) {
        let tag = match[2];
        let nums = [match[3], match[4], match[5]];
        let decryptedMessage = '';
  
        for (let num of nums) {
          let charCode = Number(num);
          decryptedMessage += String.fromCharCode(charCode);
        }
  
        console.log(`${tag}: ${decryptedMessage}`);
      } else {
        console.log('Valid message not found!');
      }
    }
  }
messageDecrypter(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"]
);
messageDecrypter(["3",
"This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
"$tAGged$: [97][97][97]|",
"$Request$: [73]|[115]|[105]|true"]);
