let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 0
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    message = "Do you want to draw?"
} else if (sum === 21) {
    message = "BLACKJACK-pot!!!"
    hasBlackJack = true
} else {
    message = "Your're out of the game."
    isAlive = false
}

console.log(message)
console.log("are you blackJack?", hasBlackJack)
console.log("are you alive?", isAlive)

