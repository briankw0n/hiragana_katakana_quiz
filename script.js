import { hiraganaCharacters, katakanaCharacters, kanjiCharacters } from './characters.js';

const hiraganaButton = document.getElementById("hiraganaButton");
const katakanaButton = document.getElementById("katakanaButton");
const bothButton = document.getElementById("bothButton");
const kanjiButton = document.getElementById("kanjiButton");
const allButton = document.getElementById("allButton");

hiraganaButton.addEventListener("click", () => startQuiz("hiragana"));
katakanaButton.addEventListener("click", () => startQuiz("katakana"));
bothButton.addEventListener("click", () => startQuiz("both"));
kanjiButton.addEventListener("click", () => startQuiz("kanji"));
allButton.addEventListener("click", () => startQuiz("all"));

const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const resultElement = document.getElementById("result");
const nextButton = document.getElementById("nextButton");
const counter = document.getElementById("current");
const restartButton = document.getElementById("restartButton");

let currentQuestion = 0;
let score = 0;
let totalQuestions = 10;
nextButton.style.display = "none";
let currentCharacters;

function startQuiz(mode) {
  // Clear any previous selections
  currentQuestion = 0;
  score = 0;
  resultElement.textContent = "";
  nextButton.style.display = "block";
  
  // Determine which characters to use based on the selected mode
  if (mode === "hiragana") {
    currentCharacters = hiraganaCharacters;
    document.getElementById("title").textContent = "Hiragana Characters";
  } else if (mode === "katakana") {
    currentCharacters = katakanaCharacters;
    document.getElementById("title").textContent = "Katakana Characters";
  } else if (mode === "both") {
    currentCharacters = hiraganaCharacters.concat(katakanaCharacters);
    document.getElementById("title").textContent = "Hiragana/Katakana Characters";
  } else if (mode === "kanji") {
    currentCharacters = kanjiCharacters;
    document.getElementById("title").textContent = "Kanji Characters";
  } else {
    currentCharacters = hiraganaCharacters.concat(katakanaCharacters).concat(kanjiCharacters);
    document.getElementById("title").textContent = "All Characters";
  }
  
  // Hide the mode selection buttons and show the quiz container
  document.querySelector(".options-container").style.display = "none";
  document.querySelector(".quiz-container").style.display = "block";
  
  loadQuestion();
}

// Helper function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestion() {
  // Shuffle the questions and options
  shuffleArray(currentCharacters);
  const currentQuiz = currentCharacters[currentQuestion];

  // Display the question and options
  questionElement.textContent = currentQuiz.question;
  shuffleArray(currentQuiz.options);
  options.forEach((option, index) => {
    option.textContent = currentQuiz.options[index];
    option.addEventListener("click", checkAnswer);
  });
  resultElement.textContent = "";
  nextButton.disabled = true;
  document.getElementById("current").textContent = `${currentQuestion + 1}/${totalQuestions}`;
}

function checkAnswer(event) {
  const selectedOption = event.target;
  const currentQuiz = currentCharacters[currentQuestion];

  if (selectedOption.textContent === currentQuiz.answer) {
    // resultElement.textContent = "Correct!";
    score++;
    selectedOption.style.backgroundColor = "green"; // Apply green border for correct answer
  } else {
    // resultElement.textContent = "Wrong!";
    selectedOption.style.backgroundColor = "red"; // Apply red border for incorrect answer
  }

  options.forEach((option) => {
    option.removeEventListener("click", checkAnswer);
  });

  nextButton.disabled = false;
}

function nextQuestion() {
  // Reset the borders when moving to the next question
  options.forEach((option) => {
    option.style.backgroundColor = "#323437"; // Reset background color
  });

  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    questionElement.textContent = `Quiz completed! Your score: ${score}/${totalQuestions}`;
    options.forEach((option) => {
      option.style.display = "none";
    });
    resultElement.textContent = "";
    nextButton.style.display = "none";
    counter.style.display = "none";
    restartButton.style.display = "block";
  }
}

function restartGame() {
  currentQuestion = 0;
  score = 0;
  resultElement.textContent = "";
  nextButton.style.display = "block";
  restartButton.style.display = "none";
  // Reset the display property of options
  options.forEach((option) => {
    option.style.display = "block";
  });
  counter.style.display = "block";
  loadQuestion();
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartGame);

// loadQuestion();
