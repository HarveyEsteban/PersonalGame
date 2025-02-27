// Variables for Score PlaceHolder
let playerHolderScore = document.querySelector('.playerScore');
let computerHolderScore = document.querySelector('.computerScore');
let drawHolderScore = document.querySelector('.drawScore');
let mainAni = document.querySelector('.mainDisplayAnimation');

let imgPlayer = document.querySelector('#playerChoice');
let imgComputer = document.querySelector('#computerChoice');

let winnerPannel = document.querySelector('.winnerPanel');
let animation = document.querySelector('.playerChoice');

// variable For Selection Option

const btn = document.querySelector('.btnSelection');
const btnPlayAgain = document.querySelector('.playAgainBtn');

//Variable for Holding Score That will be increment
let playerScore = 0;
let computerScore = 0;
let draw = 0;
let animationCOunt = 0;

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

function winOrLose(pChoice, cChoice)
{

const winingPair = {
    rock: "scissor",
    scissor: "paper",
    paper: "rock"
}

setTimeout(()=>{
    if(pChoice === cChoice)
    {
        draw++;
        winnerPannel.style.display = "flex";
        winnerPannel.style.backgroundColor = "#FACC15";
        winnerPannel.textContent = "Draw";
        drawHolderScore.textContent = `Draw: ${draw}`;
    }
    else if(winingPair[pChoice] === cChoice)
    {
        playerScore++;
        winnerPannel.style.display = "flex";
        winnerPannel.style.backgroundColor = "#22C55E";
        winnerPannel.textContent = "Player Won, Good job Bitch!!!";

        playerHolderScore.textContent = `Player: ${playerScore}`;
    }
    else
    {
        computerScore++;
        winnerPannel.style.display = "flex";
        winnerPannel.style.backgroundColor = "#EF4444";
        winnerPannel.textContent = "Computer Won, Congrats Isa kang Tanga";
        computerHolderScore.textContent = `Computer: ${computerScore}`;
    }
}, 1000)

    setTimeout(()=>{
        btnPlayAgain.style.display = "flex";
    }, 3000)


}

// function for animation such as when battling
function animationStart(pChoice, cChoice) {
    mainAni.style.display = "flex";

    function handleAnimation() { // Define function inside
        animationCOunt++;
        if (animationCOunt >= 3) {
            imgPlayer.src = `./${pChoice}.png`;
            imgComputer.src = `./${cChoice}.png`;
            winOrLose(pChoice, cChoice);

            animation.removeEventListener("animationiteration", handleAnimation); // ✅ Properly remove it
            animationCOunt = 0; // Reset for next round
        }
    }

    animation.addEventListener("animationiteration", handleAnimation); // ✅ Only adds once per game
}

btnPlayAgain.addEventListener('click', ()=>{
    mainAni.style.display = "none";
    winnerPannel.style.display = "none";
    btnPlayAgain.style.display = "none";
    btn.style.display = "flex";

});



//get player Choice
btn.addEventListener('click', (e)=>{

let pick = e.target.closest("div");

if(!pick || !pick.id) return;


switch (pick.id) {
    case "rock":
        playerChoice = "rock";
        btn.style.display = "none";
        animationStart(playerChoice, computerChoiceRandom);
        console.log(playerChoice)
        break;

    case "paper":
        playerChoice = "paper";
        btn.style.display = "none";
        animationStart(playerChoice, computerChoiceRandom);
        console.log(playerChoice)

        break;
     
    case "scissor":
        playerChoice = "scissor";
        btn.style.display = "none";
        animationStart(playerChoice, computerChoiceRandom);
        console.log(playerChoice)

        break;
}

});
