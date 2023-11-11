// Store questions and answers in an array of objects

var questionsArray = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        question: "The condition in an if/else statement is enclosed within:",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis",
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        question: "String values must be enclosed within _ when being assigned to variables:",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    },
]

// Variables for HTML elements
var startScreen = document.getElementById("start-screen");
var startButton = document.getElementById("start");
var questionBox = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var answerChoices = document.getElementById("choices");
var timerElement = document.getElementById("time");
var answerFeedback = document.getElementById("feedback");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var submitScore = document.getElementById("submit");

// Variable to hold the score
var score = 0;

// variable to set the initial time remaining
var timeLeft = 60;

// variable to track whether the quiz has finished, to stop countdown
var quizCompleted = false;

// var for current question

var currentQuestionIndex = 0;

// console.log(questionBox);
// console.log(questionTitle);
// console.log(answerChoices);

// function to manage the countdown
function countdown() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timerElement.textContent = 0;
            timeLeft = 0;
            endQuiz();
        } 
        if (quizCompleted) {
            clearInterval(timeInterval);
        }
    }, 1000)
};

// hide start screen when start button is clicked, show the first question and start the countdown
startButton.addEventListener("click", function() {
    startScreen.classList.add("hide");
    showQuestions();
    countdown();
    }
);

// display questions using forEach

function showQuestions() {
    questionBox.classList.remove("hide");
    answerChoices.classList.remove("hide");
    // get the current question & update the element content
    var currentQuestion = questionsArray[currentQuestionIndex];
    questionTitle.textContent = currentQuestion.question;
    // make sure list of answers is clear
    answerChoices.innerHTML = "";

    // iterate through the possible answers to the current question and create buttons
    currentQuestion.choices.forEach(function(choice, i) {
        //console.log(choice);    
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("value", choice);

        // show text if answer choices preceded by a number (first being '1.' rather than '0.')
        choiceButton.textContent = i+1 + "." + choice;

        // append buttons to choices section and check answer once clicked
        answerChoices.appendChild(choiceButton);
        choiceButton.onclick = checkAnswer;
    });
    
};


function checkAnswer() {
    // check if a wrong answer was given (user choice does not match answer), remove 10secs, tell user they were incorrect
    if (this.value !== questionsArray[currentQuestionIndex].answer) {     
        timeLeft -=10;
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Incorrect"
        timerElement.textContent = timeLeft;
    } else {
        // if correct answer, tell user
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Correct!"
    }

    // only show the answer feedback temporarily
    answerFeedback.setAttribute("class", "feedback");
    setTimeout(function() {
        answerFeedback.setAttribute("class", "feedback hide");
    }, 1000);

    // move to next question and end quiz of no more questions left in array
    currentQuestionIndex++;
    if (currentQuestionIndex >= questionsArray.length) {
        endQuiz();
    } else {
        showQuestions();
    };
};

// display questions using individual functions
/*
function to show the first question
function firstQuestion() {
    questionBox.classList.remove("hide");
    questionTitle.textContent = questionsArray[0].question;
    for (var i = 0; i < questionsArray[0].choices.length; i++) {
        var choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[0].choices[i];
        choice.addEventListener("click", function(event) {
            var chosenAnswer = event.target.textContent;
            checkAnswerOne(chosenAnswer, questionsArray[0].answer);
        })
    }
};

// function to check the first answer
function checkAnswerOne(chosenAnswer, answer) {
    if (chosenAnswer !== answer) {
        timeLeft -=10;
        secondQuestion();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Incorrect"
    } else {
        secondQuestion();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Correct!"
    }
}

// function to show the second question
function secondQuestion() {
    choices.innerHTML = "";
    questionTitle.textContent = questionsArray[1].question;
    for (var i = 0; i < questionsArray[1].choices.length; i++) {
        var choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[1].choices[i];
        choice.addEventListener("click", function(event) {
            var chosenAnswer = event.target.textContent;
            checkAnswerTwo(chosenAnswer, questionsArray[1].answer);
        })
    }
};

// function to check the second answer
function checkAnswerTwo(chosenAnswer, answer) {
    if (chosenAnswer !== answer) {
        timeLeft -=10;
        thirdQuestion();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Incorrect"
    } else {
        thirdQuestion();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Correct!"
    }
}

// function to show the third question
function thirdQuestion() {
    choices.innerHTML = "";
    questionTitle.textContent = questionsArray[2].question;
    for (var i = 0; i < questionsArray[2].choices.length; i++) {
        var choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[2].choices[i];
        choice.addEventListener("click", function(event) {
            var chosenAnswer = event.target.textContent;
            checkAnswerThree(chosenAnswer, questionsArray[2].answer);
        })
    }
};

// function to check the third answer
function checkAnswerThree(chosenAnswer, answer) {
    if (chosenAnswer !== answer) {
        timeLeft -=10;
        fourthQuestion();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Incorrect"
    } else {
        fourthQuestion();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Correct!"
    }
}

// function to show the fourth question
function fourthQuestion() {
    choices.innerHTML = "";
    questionTitle.textContent = questionsArray[3].question;
    for (var i = 0; i < questionsArray[3].choices.length; i++) {
        var choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[3].choices[i];
        choice.addEventListener("click", function(event) {
            var chosenAnswer = event.target.textContent;
            checkAnswerFour(chosenAnswer, questionsArray[3].answer);
        })
    }
};

// function to check the fourth answer
function checkAnswerFour(chosenAnswer, answer) {
    if (chosenAnswer !== answer) {
        timeLeft -=10;
        fifthQuestion();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Incorrect"
    } else {
        fifthQuestion();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Correct!"
    }
}

// function to show the fifth question
function fifthQuestion() {
    choices.innerHTML = "";
    questionTitle.textContent = questionsArray[4].question;
    for (var i = 0; i < questionsArray[4].choices.length; i++) {
        var choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[4].choices[i];
        choice.addEventListener("click", function(event) {
            var chosenAnswer = event.target.textContent;
            checkAnswerFive(chosenAnswer, questionsArray[4].answer);
        })
    }
};

// function to check the fifth answer
function checkAnswerFive(chosenAnswer, answer) {
    if (chosenAnswer !== answer) {
        timeLeft -=10;
        endQuiz();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Incorrect"
    } else {
        endQuiz();
        answerFeedback.classList.remove("hide");
        answerFeedback.textContent = "Correct!"
    }
}
*/


// function to end quiz and show results
function endQuiz() {
    quizCompleted = true;
    questionBox.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore.textContent = timeLeft;
};

// store the initials and score in local storage
submitScore.addEventListener("click", function(event) {
    event.preventDefault();
    var initials = document.getElementById("initials").value;
    if (initials !== "") {
        var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
        var newScore = {
            score: timeLeft,
            initials: initials
        }
        highScores.push(newScore);
        localStorage.setItem("highscores", JSON.stringify(highScores));
    };
    // open high scores page
    window.open("highscores.html", "_self");
});
