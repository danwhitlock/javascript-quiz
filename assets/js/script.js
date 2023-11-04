// Store questions and answers in an array of objects

let questions = [
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

// Variable to hold the score
let score = 0;

// Variables for HTML elements
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionBox = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let answerChoices = document.getElementById("choices");
let timerElement = document.getElementById("time");

// console.log(questionBox);
// console.log(questionTitle);
// console.log(answerChoices);

// function to manage the countdown
function countdown() {
    timeLeft = 60;
    var timeInterval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            timerElement.textContent = "0";
            clearInterval(timeInterval);
        }
    }, 1000)
};

// hide start screen when start button is clicked and show a question
startButton.addEventListener('click', function() {
    startScreen.setAttribute("class", "hide");
    showQuestion();
    }
);

// function to show a question
function showQuestion() {
    // show the question box
    questionBox.classList.remove("hide");
    
    // set the question to begin with
    let currentQuestion = questions[0];

    // populate the question text
    questionTitle.textContent = currentQuestion.question;
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let choice = document.createElement("button");
        answerChoices.append(choice);
        choice.textContent = currentQuestion.choices[i];
    }
};

// function to check if answer was correct and update score
function checkAnswer() {

}

// function to end quiz if out of time or no more questions
function endQuiz() {

}
