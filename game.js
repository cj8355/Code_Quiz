// creating an array and passing the number, questions, options, and answers
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');  

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

/*Questions that are used in the quiz*/ 
let questions = [
    {
    question: "What does HTML stand for?",
    choice1: "Hyper Text Preprocessor",
      choice2: "Hyper Text Markup Language",
      choice3: "Hyper Text Multiple Language",
      choice4: "Hyper Tool Multi Language",
      answer: 2,
  },
    {
    question: "What does CSS stand for?",
      choice1: "Common Style Sheet",
      choice2: "Colorful Style Sheet",
      choice3: "Computer Style Sheet",
      choice4: "Cascading Style Sheet",
      answer: 4,
  },
  {
    question: "Which company developed JavaScript?",
      choice1: "Netscape",
      choice2: "Google",
      choice3: "Microsoft",
      choice4: "AOL",
      answer: 1,
  },
  {
    question: "Which of the following is not a JS data type?",
      choice1: "Number",
      choice2:"Variable",
      choice3: "String",
      choice4: "Object",
      answer: 2,
  },
  {
    question: "Which of the following CSS properties is not a part of the Box model?",
    choice1: "Content",
    choice2: "Border",
    choice3: "Margin",
    choice4: "Fill",
    answer: 4,
      
  },
  {
    question: "Which of the following video formats are not supported by HTML5?",
        choice1: "mp4",
        choice2: "WebM",
        choice3: "mp3",
        choice4: "Avi",
        answer: 4,
  },
  {
    question: "Which of the following isn't a CSS style component?",
        choice1: "Selector",
        choice2: "Value",
        choice3: "Property",
        choice4: "Text",
        answer: 4,
  },
  {
    question: "Which of the following isn't a type of CSS?",
        choice1: "Outline",
        choice2: "External",
        choice3: "Inline",
        choice4: "Internal",
        answer: 1,

  },
  {
    question: "Which of the following isn't a position state in CSS?",
        choice1: "Relative",
        choice2: "Fixed",
        choice3: "Absolute",
        choice4: "Dynamic",
        answer: 4,
  },
  {
    question: "What does API stand for?",
        choice1: "Applied Programming Interface",
        choice2: "Application Programming Intersection",
        choice3: "Application Programming Interface",
        choice4: "Application Plan Interface",
        answer: 3,
  }
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
  questionCounter = 0
  score = 0
  availableQuestions = [...questions]
  getNewQuestion()
}

/*Returns the next question. Adds the most recent score to locale storage.*/
getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS || seconds == 0) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('end.html')
  }

  questionCounter++
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
  progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  })

  availableQuestions.splice(questionsIndex, 1)

  acceptingAnswers = true
}

/*Adds an event listener to listen for the answer choice. Determines if the answer selected is correct */
choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

/*If the answer is correct, add 100 points to the score. If incorrect, decrease the number of seconds on the timer by 3 */
    if(classToApply === 'correct') {
      incrementScore(SCORE_POINTS)
    }else{
      seconds -= 3;
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 1000)
  })
})

incrementScore = num => {
  score +=num
  scoreText.innerText = score
}

startGame()
/*Sets the countdown timer */
var seconds = 59;
function secondPassed() {
  var minutes = Math.round((seconds - 30) / 60);
  var remainingSeconds = seconds % 60;

  if(remainingSeconds < 10) {
    remainingSeconds = "0" + remainingSeconds;
  }

  document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
  if(seconds > 0) {
    seconds--;
  }else{
    return window.location.assign('end.html')
  }
  
}


var countdownTimer = setInterval('secondPassed()', 1000)