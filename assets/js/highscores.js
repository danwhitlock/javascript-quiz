console.log(localStorage.getItem("initials") + " " + localStorage.getItem("highscore"));

let scoresList = document.getElementById("highscores");

console.log(scoresList);

// push the new high score to the high score list
function renderScores() {
    let newScore = document.createElement("li");
    console.log(newScore);
    scoresList.appendChild(newScore);
    newScore.textContent = (localStorage.getItem("initials") + " " + localStorage.getItem("highscore"));
};

renderScores();