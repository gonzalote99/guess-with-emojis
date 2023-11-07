const quizDB = [
  {
    question: 'Que 1: 🏠',
    ans: 'house'
  },
  {
    question: 'Que 2: ⏰',
    ans: 'wake'
  },
  {
    question: 'Que 3: 🔪',
    ans: 'khoon'
  },
  {
    question: 'Que 4: 🌟',
    ans: 'start'
  },
  {
    question: 'Que 5: ♥',
    ans: 'heart'
  }
];

const emojiQuestion = document.querySelector('.emoji-question');
const submit = document.querySelector('#submit');

const answers = document.querySelector('.answer');
const showScore = document.querySelector('#show-score');
const timer = document.querySelector('.timer');


let score = 0;
let questionCount = 0;
let timeLeft = 20;

const loadQuestion = () => {
  emojiQuestion.innerText = (quizDB[questionCount].question);
}

loadQuestion();

submit.addEventListener('click', () => {
  if(answers.value === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  if(questionCount < quizDB.length) {
    loadQuestion();
    document.getElementById('answer-input').value = '';
  }
  else {
    showScore.innerHTML = `<h3>you score: <span>${score}/${quizDB.length}</span>!</h3>
    <button class='btn' onclick='location.reload()'>play again</button> 
    `;
    showScore.classList.remove('score-area')
    timer.remove(timeLeft)
    
  
   
  }

})

const quizTimer = setInterval(() => {
  
  if(timeLeft >= 0) {
  
   timer.innerHTML = timeLeft;
   timeLeft--;

  }

  
  
  
  else {
    timer.innerHTML = 'game over';
    const reload = setTimeout(() => {
      window.location.reload();
    }, 3000)
    
  }
}, 1000);

