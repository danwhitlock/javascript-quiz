let savedScores = JSON.parse(localStorage.getItem("highscores"));
// console.log(JSON.parse(localStorage.getItem("highscores")));
let scoresList = document.getElementById("highscores");
let clearScores = document.getElementById("clear");

// push the new high score to the high score list
function renderScores() {
    
    for (let i = 0; i < savedScores.length; i++) {
        let newScoreRow = document.createElement("li");
        scoresList.appendChild(newScoreRow);
        newScoreRow.textContent = savedScores[i].score + " " + savedScores[i].initials;
    }
}
renderScores();

clearScores.addEventListener("click", function() {
    savedScores = [];
    scoresList.textContent = "";
    localStorage.clear();
    console.log(savedScores);
    renderScores();
});