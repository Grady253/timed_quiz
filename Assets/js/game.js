// Declare countdown
let timerEl = document.querySelector("#timer");
let questionContainer = document.querySelector("#question");
let startBtn = document.querySelector("#start");
let introEl = document.querySelector("#introduction");
let gameHasEnded = document.querySelector("#gameOver");
let pointsEl = document.querySelector("#finalScore");
let outcome = document.querySelector("#outcome");
let questionNumber = 0;
let quizClock = 60;
let points = 0;

function quizTimer() {
  const seconds = setInterval(function () {
    quizClock--;
    timerEl.textContent = quizClock;

    // stops the timer and notifies user time has ran out.
    if (quizClock === 0 || quizClock < 1) {
      clearInterval(seconds);
      // alert("Out of time.");
      endGame();
    }
  }, 1000);
}


startBtn.addEventListener("click", (event) => {
  clickEl = event.target;
  introEl.setAttribute('class','hide');
  gameHasEnded.setAttribute('class','hide');
  quizTimer();
  startGame();
});

questionContainer.addEventListener("click", function (event) {
  const clickEl = event.target;
  if (!clickEl.matches("button")) return;
  const userResponse = clickEl.dataset.answer;
  correctAnswer(event);
});

// Declare questions
const quizQuestions = [
  {
    Question: "What is the symbol to comment in javascript?",
    Choice: ["A: //", "B: /> ", "C: ()", "D: ||"],
    Answer: "A: //"
  },
  
  {
    Question: "What is the script tag for Javascript when writing on HTML?",
    Choice: ["A: javascript", "B: script", "C: js", "D: java"],
    Answer: "B: script"
  },
  
  {
    Question: "What are Javascript data types?",
    Choice: ["A: String", "B: Object", "C: Numbers", "D: All of the above"],
    Answer: "D: All of the above"
  },
  
  {
    Question: "What should you always first try to use to declare variables?",
    Choice: ["A:let", "B: const", "C: var","D: Declare"],
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


// let currentQuestion = quizQuestions[questionNumber];


function postedQuestion() {
  let questionTemplate = `<h2>${quizQuestions[questionNumber].Question}</h2>
  <button id=Choice data-answer="${quizQuestions[questionNumber].Choice[0]}">${quizQuestions[questionNumber].Choice[0]}</button>
  <button id=Choice data-answer=" ${quizQuestions[questionNumber].Choice[1]}">${quizQuestions[questionNumber].Choice[1]}</button>
  <button id=Choice data-answer=" ${quizQuestions[questionNumber].Choice[2]}">${quizQuestions[questionNumber].Choice[2]}</button>
  <button id=Choice data-answer=" ${quizQuestions[questionNumber].Choice[3]}">${quizQuestions[questionNumber].Choice[3]}</button>`;
  
  document.getElementById("question").innerHTML = questionTemplate;
}

function correctAnswer(event) {
  if(event.target.matches('#Choice')){
    if(event.target.innerHTML === quizQuestions[questionNumber].Answer){ 
      outcome.innerHTML ="you got it!";
      points += 3;
    } else {
      quizClock = (quizClock - 10);
      // currentQuestion++;
      outcome.innerHTML = "better luck next time!";
    };
    
    if(questionNumber < (quizQuestions.length -1)){
      questionNumber++;
      postedQuestion();
    } else {
      endGame();
    }
  }
};


function startGame() {
  postedQuestion();
}

function endGame(){
  questionContainer.style.display = 'none';
  gameHasEnded.style.display = 'block';
  pointsEl.innerHTML = points;
  
}
