
//Select every button and assign it to a constant

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

//global choice variable

let userChoice 
let computerChoice
let result

//For every button Clicked, display the target id in the html & display result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
   userChoice = e.target.id
   userChoiceDisplay.innerHTML = userChoice
   generateComputerChoice()
   getResult()
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
        result = 'YOU WON'
    }
    if(computerChoice === 'Rock'  && userChoice === 'Scissors'){
        result = 'YOU LOST'
    }
    if(computerChoice === 'Paper'  && userChoice === 'Scissors'){
        result = 'YOU WON'
    }
    if(computerChoice === 'Paper'  && userChoice === 'Rock'){
        result = 'YOU LOST'
    }
    if(computerChoice === 'Scissors'  && userChoice === 'Rock'){
        result = 'YOU WON'
    }
    if(computerChoice === 'Scissors'  && userChoice === 'Paper'){
        result = 'YOU LOST'
    }
    resultDisplay.innerHTML = result
}