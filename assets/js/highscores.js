var savedScores = JSON.parse(localStorage.getItem("highscores"));
// console.log(JSON.parse(localStorage.getItem("highscores")));
var scoresList = document.getElementById("highscores");
var clearScores = document.getElementById("clear");

// push the new high score to the high score list
function renderScores() {
    
    for (var i = 0; i < savedScores.length; i++) {
        var newScoreRow = document.createElement("li");
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