let userScore = 0
let computerScore = 0

const user_score = document.getElementById('user-score')
const computer_score = document.getElementById('computer-score')

const result_message = document.querySelector('.result-message > p')

const allCards = document.querySelectorAll('.card')
allCards.forEach(card => card.addEventListener('click', chooseCard))

function chooseCard() {
  const userCard = this.dataset.card
  theGameResult(userCard)
}

function computerRandomCard() {
  const randomNumber = Math.floor(Math.random() * 3)
  const cards = ['rock', 'paper', 'scissors']
  return cards[randomNumber]
}

function theGameResult(userCard) {
  const computerCard = computerRandomCard()
  const challengedCards = `${userCard} vs ${computerCard}` 
  switch (challengedCards) {
    case "paper vs rock":
    case "rock vs scissors":
    case "scissors vs paper":
      userWins(challengedCards)
      break;
    case "scissors vs rock":
    case "paper vs scissors":
    case "rock vs paper":
      computerWins(challengedCards)
      break;
    default:
      draw(challengedCards)
      break;
  }
}

function userWins(challengedCards) {
  userScore++
  user_score.innerHTML = userScore
  result_message.innerHTML = `${challengedCards}, You won !`
}

function computerWins(challengedCards) {
  computerScore++
  computer_score.innerHTML = computerScore
  result_message.innerHTML = `${challengedCards}, You lose !`
}

function draw(challengedCards) {
  result_message.innerHTML = `${challengedCards}, It's a draw !`
}