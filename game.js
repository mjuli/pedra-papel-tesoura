const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const roundDisplay = document.getElementById('round')
const game = {
  'pedra'   : 'papel',
  'papel'   : 'tesoura',
  'tesoura' : 'pedra'
}

let round = 1
let userChoice
let computerChoice
let result

roundDisplay.innerHTML = round

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
  round++
  roundDisplay.innerHTML = round
}))

function generateComputerChoice() {
  computerChoice = possibleChoices[Math.floor(Math.random() * 3)].textContent

  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice)
    result = 'Empate!'
  else if (game[computerChoice] === userChoice)
    result = 'Você ganhou!'
  else
    result = 'O computador ganhou!'

  resultDisplay.innerHTML = result
}