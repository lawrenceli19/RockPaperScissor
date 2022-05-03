function playRound(playerSelection, botSelection){
   
    if(playerSelection == "rock"){
        if (botSelection == "paper")
        {
            return 0
        }
        else{
            return 1
        }
    }
    else if(playerSelection == "paper"){
        if (botSelection == "scissor")
        {
            return 0
        }
        else{
            return 1
        }
    }
    else{
        if (botSelection == "rock")
        {
            return 0
        }
        else{
            return 1
        }
    }
}

function computerPlay(){
    let number = Math.floor(Math.random()*3)
    let computerSelection = null
    switch(number){
        case 0:
            computerSelection = "rock"
            break;
        case 1: 
            computerSelection = "paper"
            break;
        case 2:
            computerSelection = "scissor"
            break;
    }
    return computerSelection
}

function game(){
    let winCounter = 0;
    for(let i = 1; i <= 5; i++){
        const playerSelection = prompt("Paper, Scissor or Rock?").toLowerCase()
        const computerSelection = computerPlay()     
        if(playerSelection !== "paper" && playerSelection !== "scissor" && playerSelection !== "rock"){
            alert(`Your input is not valid. Please try again.`)
            i--
            continue
        }

        if(playerSelection === computerSelection){
            //draw
            alert(`Draw! ${playerSelection} == ${computerSelection}`)
            i--
            continue
        }

        let winOrLose = playRound(playerSelection, computerSelection, winCounter)
        console.log(winOrLose)
        if (winOrLose === 0){
            alert(`You lose! ${computerSelection} beats ${playerSelection}`)
        }else{
            alert(`You win! ${playerSelection} beats ${computerSelection}`)
            winCounter ++;
        }
    }
    document.getElementById("winCounter").innerHTML = winCounter;

}
game();

