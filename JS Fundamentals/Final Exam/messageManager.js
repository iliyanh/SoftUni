function messageManager(data) {

    let possibleMesssages = Number(data.shift());
    let map = new Map()
    for (let i = 0; i < data.length; i++) {
        let tokens = data[i].split("=");
        let command = tokens[0];

        switch (command) {
            case "Add": {
                let name = tokens[1];
                let send = Number(tokens[2]);
                let received = Number(tokens[3]);
                if (map.has(name)) {
                    break;
                } else {
                    let person = createPerson(name, send, received);
                    map.set(name, person)
                }
                break;
            }
            case "Message": {
                let senderName = tokens[1];
                let receiverName = tokens[2];
                if (map.has(senderName) && map.has(receiverName)) {
                    let sender = map.get(senderName)
                    sender.send += 1;
                    if (sender.send + sender.received >= 20) {
                        console.log(`${senderName} reached the capacity!`);
                        map.delete(senderName)
                        break;
                    }
                    if (sender.send >= possibleMesssages) {

                        console.log(`${senderName} reached the capacity!`);
                        map.delete(senderName)

                    } else {
                        map.set(senderName, sender)

                    }
                    let receiver = map.get(receiverName)
                    receiver.received += 1;
                    if (receiver.send + receiver.received >= 20) {
                        console.log(`${receiverName} reached the capacity!`);

                        map.delete(receiverName)
                        break;
                    }
                    if (receiver.received >= possibleMesssages) {
                        console.log(`${receiverName} reached the capacity!`);
                        map.delete(receiverName)

                    } else {
                        map.set(receiverName, receiver)

                    }

                }
                break;

            }
            case "Empty": {
                let name = tokens[1];
                if (name === "All") {
                    //
                    map.clear()
                    //}
                } else {
                    let user = map.get(name);
                    map.delete(name)
                }
                break;
            }
            case "Statistics": {
                console.log(`Users count: ${map.size}`)
                let sortednames = map.entries()
                for (let name of sortednames) {
                    //{username1} - {number of messages}
                    console.log(`${name[1].name} - ${name[1].send + name[1].received}`);

                }
                break;
            }
        }
                if (i === data.length - 1 && command !== "Statistics"){
                    console.log(`Users count: ${map.size}`)
                let sortednames = map.entries()
                for (let name of sortednames) {
                    //{username1} - {number of messages}
                    console.log(`${name[1].name} - ${name[1].send + name[1].received}`);
                }


                }
            }
            function createPerson(personName, send, received) {
                let person = {
                    name: personName,
                    send: send,
                    received: received
                }
                return person

            }
        }
                
                messageManager(["10",
                "Add=Berg=9=0",
                "Add=Kevin=0=0",
                "Message=Berg=Kevin",
                "Add=Mark=5=4",
                "Statistics"]
                );
                console.log("----------------");
                messageManager(["20",
                "Add=Mark=3=9",
                "Add=Berry=5=5",
                "Add=Clark=4=0",
                "Empty=Berry",
                "Add=Blake=9=3",
                "Add=Michael=3=9",
                "Add=Amy=9=9",
                "Message=Blake=Amy",
                "Message=Michael=Amy",
                "Statistics"]
                );
                console.log("----------------");
                messageManager(["12",
                    "Add=Bonnie=3=5",
                    "Add=Johny=4=4",
                    "Empty=All",
                    "Add=Bonnie=3=3",
                ]);