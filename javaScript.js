let playerHand = 0;

for (let i = 0; i < 5; i++) {
    
function randomHand(){
    playerHand = Math.round(Math.random()*2);
    return (playerHand);
}


function randomSelection(){
    let userHand = Math.round(Math.random()*2);
    return (userHand);
}

function getPlayerChoice(){
    if (playerHand == 0){
        return ("Rock");
    }
    else if (playerHand == 1){
        return ("Paper");
    }
    else if (playerHand == 2){
        return ("Scissor");
    }
    else 
        return ("Eso no es una buena mano");
    
}

function getComputerChoice(){
    
    if(randomSelection() == 0){
        return ("Rock");
    }
    else if(randomSelection() == 1){
        return ("Paper");
    }
    else (randomSelection())
        return ("Scissor");
    
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection){
        return ("empate");
    }
    else if(playerSelection == "Rock"){
        if(computerSelection == "Paper"){
            return ("Gana la maquina");
        }
        else return ("Ganas")
    }
    else if(playerSelection == "Paper"){
        if(computerSelection == "Scissor"){
            return ("Gana la maquina");
        }
        else return ("Ganas")
    }    
    else if(playerSelection == "Scissor"){
        if(computerSelection == "Rock"){
            return ("Gana la maquina");
        }
        else return ("Ganas")
    }

  }
   
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const handWinner = playRound(playerSelection, computerSelection);

  
  
  
    console.log("Juego #", i);
    console.log("Tu mano", playerSelection);
    console.log("Su mano", computerSelection);
    console.log(handWinner);

 }