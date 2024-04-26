// 2. Use getRandomCard() to set the values of firstCard and secondCard
player= {
    name: "Mimah",
    chips: 439,
}
 console.log(player.names)
let cards = []
let sum = 0
console.log(sum);
hasBlackJack=false
let isAlive = false;//reflects on whether the user has won in the system and keeps track of the data. in default we put 
let message = "";

const messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
const sumEl=document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(cards)
const playerEl = document.getElementById("player-id")
playerEl.textContent = player.name + "$"  + player.chips 
// get sum-el by querySelector
//const sumEl = document.querySelector("#sum-el")
function getRandomCard()
{
      
      let randomNumber = Math.floor(Math.random()*14)//generating random numbers getRandomCard()
      if(randomNumber>=10){return 10}
      else if(randomNumber<=1){return 11}
      else{return randomNumber}


}
console.log(messageEl)

function startGame(){
    isAlive=true // because we have started the game
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame()
    console.log()
}
function renderGame() {
    cardsEl.textContent = "Cards:"
    // 3. Render the sum on the page using this format -> "Sum: 14"
    // Create a for loop that renders out all the cards instead of just two
    for(i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i]+ " "
    }
    sumEl.textContent = "Sum: "+sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
   
    messageEl.textContent=message    
}
function newCard(){
    if(isAlive===true  &&  hasBlackJack===false){
       
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
