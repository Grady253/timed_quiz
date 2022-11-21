// Declare countdown
let timerEl = document.querySelector("#timer");

let questionContainer = document.querySelector("#question");

let startBtn = document.querySelector("#start");

let introEl = document.querySelector("#introduction");

let quizClock = 60;

function quizTimer() {
  const seconds = setInterval(function () {
    quizClock--;
    timerEl.textContent = quizClock;

    // stops the timer and notifies user time has ran out.
    if (quizClock === 0 || quizClock < 1) {
      clearInterval(seconds);
      alert("Out of time.");
    }
  }, 1000);
}

startBtn.addEventListener("click", (event) => {
  clickEl = event.target;
  introEl.setAttribute('class','hide');
  quizTimer();
  startGame();

});

questionContainer.addEventListener("click", function (event) {
  const clickEl = event.target;

  if (!clickEl.matches("button")) return;

  const userResponse = clickEl.dataset.answer;

  console.log(userResponse);

});

// Declare questions
const quizQuestions = [
  {
    Question: "What is the symbol to comment in javascript?",
    Choice: ["A: //", "B: /> ", "C: ()", "D: ||"],
    Answer: ["A: //"]
  },

  {
    Question: "What is the script tag for Javascript when writing on HTML?",
    Choice: ["A: <javascript>", "B: <script>", "C: <js>", "D: <java>"],
    Answer: "B: <script>"
  },

  {
    Question: "What are Javascript data types?",
    Choice: ["A: String", "B: Object", "C: Numbers", "D: All of the above"],
    Answer: "D: All of the above"
  },

  {
    Question: "What should you always first try to use to declare variables?",
    Choice: ["A:let", "B: const", "c: var"],
    Answer: "B: const"
  },

  {
    Question: "What does DOM stand for?",
    Choice: [
      "A:Document Object Model",
      "B: Diverse Opportunity Mode",
      "C: Different Object Modes",
      "D: Different Operation Methods",
    ],
    Answer: "A:Document Object Model"
  },
];

let questionNumber = 0;

let currentQuestion = quizQuestions[questionNumber];

function postedQuestion() {
  let questionTemplate = `<h2>${currentQuestion.Question}</h2>
    <button data-answer="${currentQuestion.Choice[0]}">${currentQuestion.Choice[0]}</button>
    <button data-answer=" ${currentQuestion.Choice[1]}">${currentQuestion.Choice[1]}</button>
    <button data-answer=" ${currentQuestion.Choice[2]}">${currentQuestion.Choice[2]}</button>
    <button data-answer=" ${currentQuestion.Choice[3]}">${currentQuestion.Choice[3]}</button>`;

  document.getElementById("question").innerHTML = questionTemplate;
}

function correctAnswer() {
  if (currentQuestion.Choice == currentQuestion.Answer){
    questionNumber++;
    console.log("Correct!");
  } else {
    console.log("Wrong!");
  }
}

function startGame() {
  postedQuestion();
  
}

//Hide Start screen

//start timer at 0

//Display the current question
// displayCurrentQuestion();

//Display first questions

//set the starting value of 'countdown'

//Start timer function

//IF countdown === 0, then `endGame()`

//function answerQuestion()

//validate the selected answer

//if answer is wrong, subtract from 'countdown'

//Increase questionNumber by 1

// IF lasted question answered, then `endGame();, else ask questions

// displayCurrentQuestion();

//Display question

// function displayCurrentQuestion(){

// };

//function `endGame`

//
