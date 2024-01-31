
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#play");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const idx = Math.floor(Math.random() * 3);
    const compChoice = options[idx];
    return compChoice;
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
        // console.dir(play);
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
        // console.log("game is lose");
    }
}

const drawGame = () => {
    msg.innerText = "Draw";
    msg.style.backgroundColor = "blue";
}

const playGame = (userChoice) => {
    console.log(userChoice);
    // generate computer choice
    const compChoice = getCompChoice();
    console.log(compChoice);
    let userWin = true;
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice=== "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });  
});