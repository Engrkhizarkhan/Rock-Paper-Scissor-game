let playerScore = 0;
let computerScore = 0;

const computerInput = (input) => {
    const options = ["Rock", "Paper", "Scissors"];
    if(Math.random() < 1){
        if(input === 'Rock')
        return 'Paper'
        if(input === 'Paper')
        return 'Scissors'
        if(input === 'Scissors')
        return 'Rock'
    }else{
    const computerOption = Math.floor(Math.random() * options.length);
    return options[computerOption];
}
}
const rulesForWin = (player, computer) => {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Paper" && computer === "Rock") ||
        (player === "Scissors" && computer === "Paper")
    );
}

const randomResult = (playerInput) => {
    const computerResult = computerInput(playerInput);

    if (rulesForWin(playerInput, computerResult)) {
        playerScore++;
        return `Player Wins!! ${playerInput} beats ${computerResult}`;
    } else if (playerInput === computerResult) {
        return `It's a tie! ${playerInput} and ${computerResult} are the same.`;
    } else {
        computerScore++;
        return `Computer Wins!! ${computerResult} beats ${playerInput}`;
    }
}

const playerLiveScore = document.getElementById('player-score');
const computerLiveScore = document.getElementById('computer-score');
const displayMsg = document.getElementById('display-msg');
const winMsg = document.getElementById('result-msg');
const optionContainer = document.getElementById('option-container');

const showResult = (playerInput) => {
    displayMsg.innerText = randomResult(playerInput);
    playerLiveScore.innerText = playerScore;
    computerLiveScore.innerText = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        winMsg.innerText = `${playerScore === 3 ? "Player" : "Computer"} has won the game!`;
        winMsg.style.color = playerScore === 3 ? "green" : "red";
        restbtn.style.display = "block";
        optionContainer.style.display = "none";
        
    }
}
const restFuntion = () =>{
    playerScore = 0;
    computerScore  = 0;
    displayMsg.innerText = ""
    winMsg.innerText = ""
    playerLiveScore.innerText = playerScore;
    computerLiveScore.innerText = computerScore;
    restbtn.style.display = "none"
    optionContainer.style.display = "flex";
    
}

const restbtn = document.getElementById('rest-button');

restbtn.addEventListener('click', () => {
    restFuntion()
})

const rockBtn = document.getElementById('rockbtn');
const paperBtn = document.getElementById('paperbtn');
const scissorBtn = document.getElementById('scissorbtn');
const summerybtn = document.getElementById('summery')


rockBtn.addEventListener('click', () => {
    showResult("Rock");
});

paperBtn.addEventListener('click', () => {
    showResult("Paper");
});

scissorBtn.addEventListener('click', () => {
    showResult("Scissors"); 
});
summerybtn.addEventListener('click', () => {
    optionContainer.classList.toggle('options-hidden');

    if(displayMsg.innerText){
       displayMsg.innerText = "";
    }else 
     displayMsg.innerText = "Choose Rock, Paper, or Scissors!";
})