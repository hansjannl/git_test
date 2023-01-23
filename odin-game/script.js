let computerOutput = document.getElementById("computer");
let outcome = document.getElementById("outcome");
let score = document.getElementById("score");
let buttonReset = document.getElementById("reset");
let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissors = document.getElementById("scissors");


buttonRock.addEventListener("click", function() {playGame("rock")});
buttonPaper.addEventListener("click", function() {playGame("paper")});
buttonScissors.addEventListener("click", function() {playGame("scissors")});
buttonScissors.addEventListener("click", function() {playGame("scissors")});
buttonReset.addEventListener("click", function() {resetGame()});



function getComputerChoice(){
   return(Math.floor(Math.random()*3));
}

function convertNumber(number){
    switch(number){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
        case 2:{
            return "scissors";
        };
    };
};


function getWinner(playerChoice){
    let computerChoice = convertNumber(getComputerChoice());
    computerOutput.innerText = computerChoice;
    if(computerChoice === playerChoice){
        return "It's a draw!";
    }else if(computerChoice === "rock" && playerChoice === "scissors"){
        return "Computer Wins!";
    }else if(computerChoice === "paper" && playerChoice === "rock"){
        return "Computer Wins!";
    }else if(computerChoice === "scissors" && playerChoice === "paper"){
        return "Computer Wins!";
    }else{
        return "You win!"
    }
}

function playGame(input){
    if(game < 5){
        buttonReset.removeAttribute("hidden");
    let winner = getWinner(input)
    outcome.innerText = winner;
    if(winner === "Computer Wins!"){
        computerWins++;
        game++;
    }else if(winner === "You win!"){
        playerWins++
        game++;
    }else{
        game++
    }
    score.innerText = `Computer wins: ${computerWins}. Games you won: ${playerWins}, total amount of games played: ${game}.`
    }
}

function resetGame(){
    game = 0;
    computerWins = 0
    playerWins = 0;
    score.innerText = "";
    reset.setAttribute = "hidden"; 
}

let game = 0;
let computerWins = 0;
let playerWins = 0;
