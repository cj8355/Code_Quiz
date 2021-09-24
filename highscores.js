/*const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')*/





/*Add variables that link to HTML elements so that they can display on the page */
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const highScoreList = document.querySelector('#HighScoresList')

/*Sets a variable to the JSON local storage high scores */
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

/*Displays the high scores from local storage */
function displayStorage() {
    for (let i = 0; i < 5; i++) {
const score = highScores[i].score;
const name = highScores[i].name;

const cardScore = document.createElement("p");

/*Displays the highscores in a list */
const cardName = document.createElement("li");

cardName.textContent = name + " " + score;
/*cardScore.textContent = score;*/

/*Add the card name variable which contains the name and highscore and append that to the high score list */
highScoreList.append(cardName);
/*highScoreList.append(cardScore);*/
}}

/*Run the display storage function */
displayStorage()