let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let firstCard = 4
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function displayMessage() {
    sumEl.textContent = "Sum: " + sum 
    if (sum <= 20) {
    message = "Do you want to draw?"
    } else if (sum === 21) {
        message = "You've got blackjack."
        hasBlackJack = true
    } else {
        message = "Your're out of the game."
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " - " + secondCard
    displayMessage()
}

function drawCard() {
    if (sumEl.textContent === "Sum: ") {
        messageEl.textContent = "Start the game."
    } else {
        cardsEl.textContent += " - 1"
        sum += 1   
        displayMessage()
    }
}






