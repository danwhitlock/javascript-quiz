// Store questions and answers in an array of objects

let questionsArray = [
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
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionBox = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let answerChoices = document.getElementById("choices");
let timerElement = document.getElementById("time");
let answerFeedback = document.getElementById("feedback");
let endScreen = document.getElementById("end-screen");
let finalScore = document.getElementById("final-score");

// variable to track the current question from the array of question objects
let currentQuestion = 0;

// Variable to hold the score
let score = 0;

// variable to set the initial time remaining
let timeLeft = 60;

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
    }, 1000)
};

// hide start screen when start button is clicked, show the first question and start the countdown
startButton.addEventListener("click", function() {
    startScreen.classList.add("hide");
    firstQuestion();
    countdown();
    }
);

// function to show the first question
function firstQuestion() {
    questionBox.classList.remove("hide");
    questionTitle.textContent = questionsArray[0].question;
    for (let i = 0; i < questionsArray[0].choices.length; i++) {
        let choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[0].choices[i];
        choice.addEventListener("click", function(event) {
            let chosenAnswer = event.target.textContent;
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
    for (let i = 0; i < questionsArray[1].choices.length; i++) {
        let choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[1].choices[i];
        choice.addEventListener("click", function(event) {
            let chosenAnswer = event.target.textContent;
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
    for (let i = 0; i < questionsArray[2].choices.length; i++) {
        let choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[2].choices[i];
        choice.addEventListener("click", function(event) {
            let chosenAnswer = event.target.textContent;
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
    for (let i = 0; i < questionsArray[3].choices.length; i++) {
        let choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[3].choices[i];
        choice.addEventListener("click", function(event) {
            let chosenAnswer = event.target.textContent;
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
    for (let i = 0; i < questionsArray[4].choices.length; i++) {
        let choice = document.createElement("button");
        choices.append(choice);
        choice.textContent = questionsArray[4].choices[i];
        choice.addEventListener("click", function(event) {
            let chosenAnswer = event.target.textContent;
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

// function to end quiz and show results
function endQuiz() {
    questionBox.classList.add("hide");
    endScreen.classList.remove("hide");
    finalScore.textContent = timeLeft;
};
