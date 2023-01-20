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
    if(computerChoice === playerChoice){
        return "draw";
    }else if(computerChoice === "rock" && playerChoice === "scissors"){
        return "Computer";
    }else if(computerChoice === "paper" && playerChoice === "rock"){
        return "Computer";
    }else if(computerChoice === "scissors" && playerChoice === "paper"){
        return "Computer";
    }else{
        return "Player"
    }
}

function playGame(){
    playerChoice = prompt("your choice");
    let winner = getWinner(playerChoice)
    console.log("winner: "+ winner);
    if(winner === "Computer"){
        computerWins++;
        game++;
    }else if(winner === "Player"){
        playerWins++
        game++;
    }else{
        game++
    }
}


let game = 0;
let computerWins = 0;
let playerWins = 0;

for (let i = 0; i < 5; i++) {
    playGame();
    console.log(`total games played: ${game}, computer wins: ${computerWins}, player wins: ${playerWins}`)
    getComputerChoice()
}