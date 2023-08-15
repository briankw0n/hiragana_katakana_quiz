const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("nextButton");

const quizData = [
  { question: "あ", options: ["A", "I", "U", "E"], answer: "A" },
  { question: "い", options: ["I", "E", "O", "U"], answer: "I" },
  { question: "う", options: ["E", "U", "I", "O"], answer: "U" },
  { question: "え", options: ["O", "E", "A", "I"], answer: "E" },
  { question: "お", options: ["U", "A", "I", "O"], answer: "O" },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionElement.textContent = currentQuiz.question;
  options.forEach((option, index) => {
    option.textContent = currentQuiz.options[index];
    option.addEventListener("click", checkAnswer);
  });
  resultElement.textContent = "";
  nextButton.disabled = true;
}

function checkAnswer(event) {
  const selectedOption = event.target;
  const currentQuiz = quizData[currentQuestion];

  if (selectedOption.textContent === currentQuiz.answer) {
    resultElement.textContent = "Correct!";
    score++;
  } else {
    resultElement.textContent = "Wrong!";
  }

  options.forEach((option) => {
    option.removeEventListener("click", checkAnswer);
  });

  nextButton.disabled = false;
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    questionElement.textContent = `Quiz completed! Your score: ${score}/${quizData.length}`;
    options.forEach((option) => {
      option.style.display = "none";
    });
    resultElement.textContent = "";
    nextButton.style.display = "none";
  }
}

nextButton.addEventListener("click", nextQuestion);

loadQuestion();