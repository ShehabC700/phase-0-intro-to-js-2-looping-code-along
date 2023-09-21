// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const names = [ `Guadalupe!`, `Ollie!`, `Aki` ]

function writeCards(names) {
    let thankYouMes = []

    for (let i = 0; i < names.length; i++) {
    let message = (`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    thankYouMes.push(message);
    console.log(message)
} 
    return thankYouMes;
}

function countDown() {
    let number = 10

    while (number > -1) {
        console.log(number--)
    }
}
