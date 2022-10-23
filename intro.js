

// playGame()

let i = 0;
let j = 0;
let k = 0;
let l = 0;

text = "It is the year 3503, the humans and super AI/Cyborgs have been battling for over 1000 years..."
nextText = "To the humans surprise, the robots have offered them a deal. Rock, paper, Scissors. The losers leave Earth for good"
thirdText = "The humans have no choice as their resources are running low and they're almost out of weaponry."
lastText = "They have chosen you to play for them. Win this round and save humanity. Lose, and you, your family and friends, every human in existence will be vaporised."

function typing() {
    if (i<text.length) {
        document.getElementById("headline").innerHTML += text.charAt(i);
        i++
        setTimeout(typing,50)
    }
}
setTimeout(() => {
    document.getElementById("headline").classList.toggle("fadeOut")
}, 7000)

function typing2() {
    if (j<nextText.length) {
        document.getElementById("headline2").innerHTML += nextText.charAt(j);
        j++
        setTimeout(typing2,75)
    }
}
typing()

setTimeout(() => {
    typing2()
}, 9000)

setTimeout(() => {
    document.getElementById("headline2").classList.toggle("fadeOut")
}, 21000)

function typing3() {
    if (k<thirdText.length) {
        document.getElementById("headline3").innerHTML += thirdText.charAt(k);
        k++
        setTimeout(typing3,75)
    }
}
setTimeout(() => {
    document.getElementById("headline3").classList.toggle("fadeOut")
}, 31000)


function typing4() {
    if (l<lastText.length) {
        document.getElementById("headline4").innerHTML += lastText.charAt(l);
        l++
        setTimeout(typing4,75)
    }
}

setTimeout(() => {
    typing3()
}, 23000)


setTimeout(() => {
    typing4()
}, 33000)



setTimeout(() => {
    document.getElementById("headline4").classList.toggle("fadeOut")
}, 47000)

setTimeout(() => {
    document.getElementById("fly-in-text").classList.toggle("flew-in-text")
}, 48500)

//human/robot entry

setTimeout(() => {
    document.querySelector(".player-human").classList.toggle("human-fly-in")
    document.querySelector(".player-robot").classList.toggle("robot-fly-in")

}, 49500)


let scores = document.querySelector(".score-system")
let statBar = document.querySelector(".stat-board")


setTimeout(() => {
    scores.classList.remove("display-none")
    statBar.classList.add("bottom-zero")

}, 49000)

setTimeout(() => {
    weapons.classList.remove("display-absolute-none")

}, 50000)

//event listeners for playing game. 

