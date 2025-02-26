// Variables for Score PlaceHolder
const playerHolderScore = document.querySelector('.playerScore');
const computerHolderScore = document.querySelector('.computerScore');
const drawHolderScore = document.querySelector('.drawScore');

const winnerPannel = document.querySelector('.winnerPanel');

// variable For Selection Option

const btn = document.querySelector('.btnSelection');


//Variable for Holding Score That will be increment
let playerScore = 0;
let computerScore = 0;
let draw = 0;

// Variable for Player and COmputer Choice
let playerChoice = "";
let computerChoiceRandom = computerChoice();

console.log(computerChoiceRandom);

//Function to get Computer Choice Randomize

function computerChoice()
{
    let arrChoice = ['rock', 'paper', 'scissor'];
    return arrChoice[Math.floor(Math.random() * 3)];
}

// function for PlayGame When user has Selected

function playGame(pChoice, cChoice)
{

const winingPair = {
    rock: "scissor",
    scissor: "paper",
    paper: "rock"
}

if(pChoice === cChoice)
{
    draw++;
    winnerPannel.textContent = "Draw";
    drawHolderScore = draw;
}
else if(winingPair[pChoice] === cChoice)
{
    playerScore++;
    winnerPannel.textContent = "Player Won, Good job Bitch!!!";
    playerHolderScore = playerScore;
}
else
{
    computerScore++;
    winnerPannel.textContent = "Computer Won, Congrats Isa kang Tanga";
    computerHolderScore = computerScore;
}


}




//get player Choice
btn.addEventListener('click', (e)=>{

let pick = e.target.closest("div");

if(!pick || !pick.id) return;


switch (pick.id) {
    case "rock":
        playerChoice = "rock";
        console.log(playerChoice)
        break;

    case "paper":
        playerChoice = "paper";
        console.log(playerChoice)

        break;
     
    case "scissor":
        playerChoice = "scissor";
        console.log(playerChoice)

        break;
}

});