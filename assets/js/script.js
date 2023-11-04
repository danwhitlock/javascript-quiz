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

// Variable to track score
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

startButton.addEventListener('click', function() {
    startScreen.setAttribute("class", "hide");
    }
);