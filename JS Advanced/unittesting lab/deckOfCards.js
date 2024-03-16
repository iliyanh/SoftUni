function deckOfCards(array){

function solve(face, suit) {
    const faces = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K",
        "A",
    ]
    const suits = {
        "S": "\u2660",
        "H": "\u2665",
        "D": "\u2666",
        "C": "\u2663"
    }

    if (!faces.includes(face)) {
        throw new Error("Error")
    } else if (!suits.hasOwnProperty(suit)) {
        throw new Error("Error")
    }

    const result = {
        face,
        suit,

        toString() {
            return this.face + suits[this.suit]
        }
    }

    return result

}
let resultArray = [];
let copyArray = [...array];

for (const tokens of copyArray) {
    let currentCard = tokens.split("");
    let suit = currentCard.pop();
    let face = currentCard.reduce((acc, current) => acc + current, "")

    try {
        let cards = solve(face, suit);
       resultArray.push(cards.toString())
    } catch (error){
        console.log(`Invalid card: ${tokens}`)
        return
    }
}
console.log(resultArray.join(" "))
}
deckOfCards(['AS', '10D', 'KH', '2C'] );// A♠ 10♦ K♥ 2♣
deckOfCards(['5S', '3D', 'QD', '1C'] );// Invalid card: 1C
