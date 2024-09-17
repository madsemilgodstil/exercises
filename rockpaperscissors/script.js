// Global variables for player and computer choices
let playerChoice = ''
let computerChoice = ''

// Function to handle the player's choice and initiate the game logic
function handlePlayerChoice (choice) {
  playerChoice = choice
  console.log('Player chose: ' + playerChoice)

  // Disable buttons after the player makes a choice
  document.getElementById('buttons').classList.add('disabled')

  // Initiate computer's choice
  computerChoice = generateComputerChoice()
  console.log('Computer chose: ' + computerChoice)

  // Show the shake animation before displaying the result
  shakeHands()

  // After the shake animation, display the choices and result
  setTimeout(() => {
    displayChoices()
    checkResult()
  }, 1800) // Wait for the shake animation to finish
}

// Function to randomly generate the computer's choice
function generateComputerChoice () {
  const choices = ['rock', 'paper', 'scissors']
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

// Function to shake the hands before revealing choices
function shakeHands () {
  document.getElementById('player1').classList.add('shake')
  document.getElementById('player2').classList.add('shake')
}

// Function to display both the player's and computer's choices
function displayChoices () {
  // Remove the shake animation
  document.getElementById('player1').classList.remove('shake')
  document.getElementById('player2').classList.remove('shake')

  // Apply the correct hand image based on the player's and computer's choice
  document
    .getElementById('player1')
    .classList.remove('rock', 'paper', 'scissors')
  document
    .getElementById('player2')
    .classList.remove('rock', 'paper', 'scissors')

  document.getElementById('player1').classList.add(playerChoice)
  document.getElementById('player2').classList.add(computerChoice)
}

// Function to determine and display the result
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

// Function to display the result (win, lose, draw)
function displayResult (result) {
  document.getElementById('win').classList.add('hidden')
  document.getElementById('lose').classList.add('hidden')
  document.getElementById('draw').classList.add('hidden')

  document.getElementById(result).classList.remove('hidden')

  // Re-enable the buttons after the result is displayed
  document.getElementById('buttons').classList.remove('disabled')
}

// Event listeners for buttons
document.querySelectorAll('.choice').forEach(button => {
  button.addEventListener('click', function () {
    handlePlayerChoice(this.getAttribute('data-choice'))
  })
})
