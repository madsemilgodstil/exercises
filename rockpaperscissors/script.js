let playerChoice = ''
let computerChoice = ''

function handlePlayerChoice (choice) {
  playerChoice = choice
  console.log('Player chose: ' + playerChoice)
  document.getElementById('buttons').classList.add('disabled')
  computerChoice = generateComputerChoice()
  console.log('Computer chose: ' + computerChoice)
  shakeHands()
  setTimeout(() => {
    displayChoices()
    checkResult()
  }, 1800)
}

function generateComputerChoice () {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

function shakeHands () {
  document.getElementById('player1').classList.add('shake')
  document.getElementById('player2').classList.add('shake')
}

function displayChoices () {
  document.getElementById('player1').classList.remove('shake')
  document.getElementById('player2').classList.remove('shake')
  document
    .getElementById('player1')
    .classList.remove('rock', 'paper', 'scissors')
  document
    .getElementById('player2')
    .classList.remove('rock', 'paper', 'scissors')
  document.getElementById('player1').classList.add(playerChoice)
  document.getElementById('player2').classList.add(computerChoice)
}

function checkResult () {
  let result = ''
  if (playerChoice === computerChoice) {
    result = 'draw'
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'win'
  } else {
    result = 'lose'
  }
  displayResult(result)
}

function displayResult (result) {
  document.getElementById('win').classList.add('hidden')
  document.getElementById('lose').classList.add('hidden')
  document.getElementById('draw').classList.add('hidden')
  document.getElementById(result).classList.remove('hidden')
  document.getElementById('buttons').classList.remove('disabled')
}

document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', function () {
    handlePlayerChoice(this.getAttribute('data-choice'))
  })
})
