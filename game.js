const options = ["rock", "paper", "scissors"];

function game(param){
    const computer = options[Math.floor(Math.random() * 3)];
    document.getElementById("human").src = `${param}.jpg`;

    if (computer === "rock") {
        document.getElementById("computer").src = "rock.jpg";
    } else if (computer === "paper") {
        document.getElementById("computer").src = "paper.jpg";
    } else if (computer === "scissors") {
        document.getElementById("computer").src = "scissors.jpg";
    }

    if (param === computer) {
        document.getElementById("result").innerHTML = "It's a tie!";
    } else if (param === "rock" && computer === "scissors" || param === "paper" && computer === "rock" || param === "scissors" && computer === "paper") {
        document.getElementById("result").innerHTML = "You win!";
    } else {
        document.getElementById("result").innerHTML = "You lose!";
    }

}

document.getElementById("rock").addEventListener("click", function() { game("rock"); });
document.getElementById("scissor").addEventListener("click", function() { game("scissors"); });
document.getElementById("paper").addEventListener("click", function() { game("paper"); });

function choose(param) {
    if (param === "rock") {
        return "rock";
    } else if (param === "paper") {
        return "paper";
    } else if (param === "scissors") {        
        return "scissors";
    }
}