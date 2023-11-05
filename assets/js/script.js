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

// Variables for HTML elements
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionBox = document.getElementById("questions");
let questionTitle = document.getElementById("question-title");
let answerChoices = document.getElementById("choices");
let timerElement = document.getElementById("time");

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
            endQuiz();
        }
    }, 1000)
};

// hide start screen when start button is clicked, show the first question and start the countdown
startButton.addEventListener("click", function() {
    startScreen.classList.add("hide");
    showQuestion();
    countdown();
    }
);

// function to show a question
function showQuestion() {
    // show the question box
    let currentQuestion = 
    
    // set the question to begin with
    let currentQuestion = questions[0];

    // populate the question text
    questionTitle.textContent = currentQuestion.question;
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        let choice = document.createElement("button");
        answerChoices.append(choice);
        choice.textContent = currentQuestion.choices[i];
        choice.addEventListener("click", function() {
            checkAnswer();
        })
    }
};

// function to check if answer was correct and update score
function checkAnswer() {
    if (choices[i] === answer) {
        // tell user they were correct        
        // move to next question
    } else {
        // tell user they were wrong
        // take 10seconds off time
        // move to next question
    }
};

// function to end quiz if out of time or no more questions
function endQuiz() {

};
