let playerResult = 0;
let systemResult = 0;
const playerResult_span = document.getElementById("player-result");
const systemResult_span = document.getElementById("system-result");
const resultBoard_div = document.querySelector(".result-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getSystemOption() {
    const options = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

function wordConversion(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "scissor";
}

function win(playerOption, systemOption) {
    const bottomPlayer = "player".fontsize(3).sub();
    const bottomCs = "comp".fontsize(3).sub();
    const playerOption_div = document.getElementById(playerOption);
    playerResult++;
    playerResult_span.innerHTML = playerResult;
    systemResult_span.innerHTML = systemResult;
    result_p.innerHTML = `${wordConversion(playerOption)}${bottomPlayer} beats ${wordConversion(systemOption)}${bottomCs}. You Won the game!`;
    
}


function lose (playerOption, systemOption) {
    const bottomPlayer = "player".fontsize(3).sub();
    const bottomCs = "comp".fontsize(3).sub();
    const playerOption_div = document.getElementById(playerOption);
    systemResult++;
    playerResult_span.innerHTML = playerResult;
    systemResult_span.innerHTML = systemResult;
    result_p.innerHTML = `${wordConversion(playerOption)}${bottomPlayer} loses to ${wordConversion(systemOption)}${bottomCs}. You lost......`;
   
}

function tie(playerOption, systemOption) {
    const bottomPlayer = "player".fontsize(3).sub();
    const bottomCs = "comp".fontsize(3).sub();
    const playerOption_div = document.getElementById(playerOption);
    result_p.innerHTML = `${wordConversion(playerOption)}${bottomPlayer} equals ${wordConversion(systemOption)}${bottomCs}. Its a tie.`;
    
}

function game(playerOption) {
    const systemOption = getSystemOption();
    switch (playerOption + systemOption) {
        case "rs":
        case "pr":
        case "sp":
        win(playerOption + systemOption);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(playerOption + systemOption);
         break;
        case "rr":
        case "pp":
        case "ss":
        tie(playerOption + systemOption);
        break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissor_div.addEventListener('click', () => game("s"));
}

main();