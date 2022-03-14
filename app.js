
//Select every button and assign it to a constant

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

//global choice variable

let userChoice 
let result

//For every button Clicked, display the target id in the html

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random () * possibleChoices.length + 1)
    
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = 'DRAW'
    }
    if(computerChoice === 'Rock'  && userChoice === 'Paper'){
        result = 'YOU LOST'
    }
    if(computerChoice === 'Rock'  && userChoice === 'Scissors'){
        result = 'YOU LOST'
    }
    if(computerChoice === 'Rock'  && userChoice === 'Scissors'){
        result = 'YOU LOST'
    }
}