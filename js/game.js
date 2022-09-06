// Declare countdown
let timerEl = document.querySelector("#timer");

let questionContainer = document.querySelector("#question");

let startBtn = document.querySelector("#start");

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
    Answer: "Answer A"
  },

  {
    Question: "What is the script tag for Javascript when writing on HTML?",
    Choice: ["A: <javascript>", "B: <script>", "C: <js>", "D: <java>"],
    Answer: "Answer B"
  },

  {
    Question: "What are Javascript data types?",
    Choice: ["A: String", "B: Object", "C: Numbers", "D: All of the above"],
    Answer: "Answer D"
  },

  {
    Question: "What should you always first try to use to declare variables?",
    Choice: ["A:let", "B: const", "c: var"],
    Answer: "Answer B"
  },

  {
    Question: "What does DOM stand for?",
    Choice: [
      "A:Document Object Model",
      "B: Diverse Opportunity Mode",
      "C: Different Object Modes",
      "D: Different Operation Methods",
    ],
    Answer: "Answer A"
  },
];

let questionNumber = 0;

let currentQuestion = quizQuestions[questionNumber];

function postedQuestion() {
  let questionTemplate = `<h2>${currentQuestion.Question}</h2>
    <button data-answer="${currentQuestion.Answer[0]}">${currentQuestion.Answer[0]}</button>
    <button data-answer=" ${currentQuestion.Answer[1]}">${currentQuestion.Answer[1]}</button>
    <button data-answer=" ${currentQuestion.Answer[2]}">${currentQuestion.Answer[2]}</button>
    <button data-answer=" ${currentQuestion.Answer[3]}">${currentQuestion.Answer[3]}</button>`;

  document.getElementById("question").innerHTML = questionTemplate;
}

// function correctAnswer() {
//   if (currentQuestion.Answer === currentQuestion.correctAnswer){
//     console.log("Correct!");
//   }else {
//     console.log("Wrong!");
//   }
// }

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