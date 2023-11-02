function partyTime(guestList){
    let guest = guestList.shift();
    let vip = []
    let regular = []
    while(guest !== "PARTY"){
        const isVip = !isNaN(guest[0])

        if(isVip){
            vip.push(guest)
        } else {
            regular.push(guest)
        }
        guest = guestList.shift();
    }
    
    for( let guest of guestList){
        if(vip.includes(guest)){
            
            vip.splice(vip.indexOf(guest), 1)
        } else {
            regular.splice(regular.indexOf(guest), 1)
            
        }
    }
    //sum.sort((a,b) => b[0] - a[0])
    let sum = regular.concat(vip)
    
    console.log(sum.length);
    vip.forEach(guest => console.log(guest))
    regular.forEach(guest => console.log(guest))
    
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
);
partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

);