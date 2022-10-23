//determine the game stats 
//Get player choice
//get computer choice
//play round function 
//play game

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let paper = document.querySelector(".paper")
let rock = document.querySelector(".rock")
let scissors = document.querySelector(".scissors")
let onPagePlayerScore = document.querySelector("div.scoreboard-player > div.score")
let onPageComputerScore = document.querySelector("div.scoreboard-computer > div.score")
let weapons = document.querySelector(".weapons")
let humanFace = document.getElementById("human-face")
let computerFace = document.getElementById("computer-face")
let middleText = document.getElementById("fly-in-text")
let scoresMessage = document.querySelector(".scores")
let weaponHistory = document.querySelector(".weapons-history ul")
let weaponHistoryRobot = document.querySelector(".weapons-history-robot ul")


function addChosenWeapon(choice) {
    //prevent form from submitting

    //create LI
        const newTodo = document.createElement("li");
        newTodo.textContent = "player chose " + choice
    //APPEND TO LIST
        weaponHistory.prepend(newTodo);
  }

  function addChosenWeaponRobot(choice) {
    //prevent form from submitting

    //create LI
        const newTodo = document.createElement("li");
        newTodo.textContent = "Robot chose " + choice
    //APPEND TO LIST
    weaponHistoryRobot.prepend(newTodo);
  }



function computerChoice ()  {
    let random = Math.floor(Math.random() * 3)
    let chosen = ""
    random == 0 ? chosen = "scissors" :
    random == 1 ? chosen = "rock" : 
                  chosen = "paper"
   return chosen

}

let computerPick = computerChoice()

function playRound (play, comp) {

    if (play == comp) {
            middleText.textContent = `The player and the Machines both have chosen ${play}, IT'S A DRAW`
            addChosenWeapon(play)
            addChosenWeaponRobot(comp)
    } else if (play === "scissors" && comp === "paper") {
            middleText.textContent = `Player wins!! His ${play}, beats computers ${comp}`
            playerScore++
            addChosenWeapon(play)
            addChosenWeaponRobot(comp)
    } else if (play === "scissors" && comp === "rock") {
            computerScore++
            middleText.textContent = `Computer wins their ${comp}, beats players ${play}`
            addChosenWeapon(play)
            addChosenWeaponRobot(comp)
    } else if (play === "rock" && comp === "scissors") {
            playerScore++
            middleText.textContent = `Player wins!! their ${play}, beats computers ${comp}`
            addChosenWeapon(play)
            addChosenWeaponRobot(comp)
    } else if (play === "rock" && comp === "paper") {
            computerScore++
            middleText.textContent = `Computer wins, its ${comp}, beats players ${play}`
            addChosenWeapon(play)
            addChosenWeaponRobot(comp)
    } else if (play === "paper" && comp === "rock") {
            playerScore++
            middleText.textContent = `Player wins!! their ${play}, beats computers ${comp}`
            addChosenWeapon(play)
            addChosenWeaponRobot(comp)
    } else if (play === "paper" && comp === "scissors") {
            computerScore++
            middleText.textContent = `Computer wins, its ${comp}, beats players ${play}`
            addChosenWeapon(play)
            addChosenWeaponRobot(comp)
    } 

    //changes pics of opponents depending on how much damage they take
    humanFace.src="./images/doomguy-" + computerScore + "hit-normal.jpeg";
    computerFace.src="./images/terminator-" + playerScore + "-face.jpg"

    //updates scores on page 
    onPagePlayerScore.textContent = playerScore
    onPageComputerScore.textContent = computerScore

    //gives happy face to the victor
    if (computerScore === 5 || playerScore === 5) {
        middleText.textContent = `${playerScore > computerScore ? "player" : "computer"} wins!`
        computerScore > playerScore ? computerFace.src="images/terminator-smile-face.jpg" : humanFace.src="images/doom-guy-smile.jpg";
        playerScore = 0;
        computerScore = 0;
        onPagePlayerScore.textContent = playerScore
        onPageComputerScore.textContent = computerScore
    }


    }

paper.addEventListener("click", () => {
    playRound("paper", computerChoice());
})

rock.addEventListener("click", () => {
    playRound("rock", computerChoice());
})

scissors.addEventListener("click", () => {
    playRound("scissors", computerChoice());
})


// function playGame() {

//     while (playerScore < 5 && computerScore < 5) {

//         let playerChoice1 = prompt("whats your poison, soldier?")
//         playRound(playerChoice1, computerChoice())
//         console.log(playerScore)
//         console.log(computerScore)

//     }

//     if (playerScore == 5) {
//         document.getElementById("headline").textContent = "player wins!"
//     } else if (computerScore === 5) {
//         document.getElementById("headline").textContent = "computer wins!"
//     }

// }


  addToDo()
  addToDo()
  addToDo()
  addToDo()