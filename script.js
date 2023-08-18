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

const title = document.getElementById("title");
const questionElement = document.getElementById("question");
const options = document.querySelectorAll(".option");
const resultElement = document.getElementById("result");
const switchButton = document.getElementById("switchButton");
const nextButton = document.getElementById("nextButton");
const counter = document.getElementById("current");
const restartButton = document.getElementById("restartButton");
const homeButton = document.getElementById("homeButton");

let totalQuestions = 10;
let currentQuestion = 0;
let score = 0;
let currentCharacters;
let gameMode;
let currentLanguage = "jp";
nextButton.style.display = "none";

function startQuiz(mode) {
  // Clear any previous selections
  currentQuestion = 0;
  score = 0;
  resultElement.textContent = "";
  nextButton.style.display = "block";
  counter.style.display = "block";
  
  // Determine which characters to use based on the selected mode
  if (mode === "hiragana") {
    gameMode = "hiragana";
    currentCharacters = hiraganaCharacters;
    document.getElementById("title").textContent = "Hiragana";
  } else if (mode === "katakana") {
    gameMode = "katakana";
    currentCharacters = katakanaCharacters;
    document.getElementById("title").textContent = "Katakana";
  } else if (mode === "both") {
    gameMode = "both";
    currentCharacters = hiraganaCharacters.concat(katakanaCharacters);
    document.getElementById("title").textContent = "Hiragana/Katakana";
  } else if (mode === "kanji") {
    gameMode = "kanji";
    currentCharacters = kanjiCharacters;
    document.getElementById("title").textContent = "Kanji";
    switchButton.style.display = "flex";
  } else {
    gameMode = "all";
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

function isKanjiCharacter(character) {
  return kanjiCharacters.some((kanji) => kanji.question === character);
}

function loadQuestion() {
  questionElement.style.padding = "0px";

  // Shuffle the questions and options
  shuffleArray(currentCharacters);
  const currentQuiz = currentCharacters[currentQuestion];

  // Display the question and options
  questionElement.textContent = currentQuiz.question;

  if (gameMode === "kanji") {
    shuffleArray(currentQuiz.options[currentLanguage]);
    options.forEach((option, index) => {
      option.textContent = currentQuiz.options[currentLanguage][index];
      option.addEventListener("click", checkAnswer);
    });
  } else if (gameMode === "all") {
    switchButton.style.display = "none";

    if (isKanjiCharacter(currentQuiz.question)) {
      questionElement.style.padding = "3px";

      shuffleArray(currentQuiz.options[currentLanguage]);
      options.forEach((option, index) => {
        option.textContent = currentQuiz.options[currentLanguage][index];
        option.addEventListener("click", checkAnswer);
      });
    } else {
      shuffleArray(currentQuiz.options);
      options.forEach((option, index) => {
        option.textContent = currentQuiz.options[index];
        option.addEventListener("click", checkAnswer);
      });
    }
  } else {
    shuffleArray(currentQuiz.options);
    options.forEach((option, index) => {
      option.textContent = currentQuiz.options[index];
      option.addEventListener("click", checkAnswer);
    });
  }

  resultElement.textContent = "";
  nextButton.disabled = true;
  counter.textContent = `${currentQuestion + 1}/${totalQuestions}`;
}

function checkAnswer(event) {
  const selectedOption = event.target;
  const currentQuiz = currentCharacters[currentQuestion];

  if (gameMode === "kanji") {
    if (currentLanguage === "jp") {
      if (selectedOption.textContent === currentQuiz.answer.jp) {
        selectedOption.classList.add("correct");
        score++;
      } else {
        selectedOption.classList.add("incorrect");
        options.forEach((option) => {
          if (option.textContent === currentQuiz.answer.jp) {
            option.classList.add("correct");
          }
        });
      }
    } else {
      if (selectedOption.textContent === currentQuiz.answer.en) {
        selectedOption.classList.add("correct");
        score++;
      } else {
        selectedOption.classList.add("incorrect");
        options.forEach((option) => {
          if (option.textContent === currentQuiz.answer.en) {
            option.classList.add("correct");
          }
        });
      }
    }
    switchButton.disabled = true;
  } else {
    if (selectedOption.textContent === currentQuiz.answer) {
      selectedOption.classList.add("correct");
      score++;
    } else {
      selectedOption.classList.add("incorrect");
      options.forEach((option) => {
        if (option.textContent === currentQuiz.answer) {
          option.classList.add("correct");
        }
      });
    }
  }

  options.forEach((option) => {
    option.removeEventListener("click", checkAnswer);
  });
  nextButton.disabled = false;
}

function nextQuestion() {
  switchButton.disabled = false;

  options.forEach((opt) => {
    opt.classList.remove("correct", "incorrect");
  });

  if (currentQuestion < totalQuestions - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    questionElement.innerHTML = `<br><br>Score: ${score}/${totalQuestions}`;
    options.forEach((option) => {
      option.style.display = "none";
    });
    resultElement.textContent = "";
    switchButton.style.display = "none";
    nextButton.style.display = "none";
    counter.style.display = "none";
    restartButton.style.display = "block";
    homeButton.style.display = "block";
  }
}

function playAgain() {
  currentQuestion = 0;
  score = 0;
  resultElement.textContent = "";
  nextButton.style.display = "block";
  restartButton.style.display = "none";
  homeButton.style.display = "none";
  // Reset the display property of options
  options.forEach((option) => {
    option.style.display = "block";
  });
  counter.style.display = "block";
  loadQuestion();
}

function restartGame() {
  // Hide the quiz container and show the mode selection buttons
  document.querySelector(".quiz-container").style.display = "none";
  document.querySelector(".options-container").style.display = "grid";
  
  // Reset the display property of options
  options.forEach((option) => {
    option.style.display = "block";
  });
  
  // Reset button displays
  nextButton.style.display = "none";
  restartButton.style.display = "none";
  homeButton.style.display = "none";
  counter.style.display = "none";
  
  // Reset option backgrounds
  options.forEach((opt) => {
    opt.classList.remove("correct", "incorrect");
  });
  
  // Clear question and result texts
  questionElement.textContent = "";
  resultElement.textContent = "";
  title.textContent = "Japanese Quiz";
}

switchButton.addEventListener("click", () => {
  if (currentLanguage === "jp") {
    currentLanguage = "en";
    switchButton.textContent = "Kana";
  } else {
    currentLanguage = "jp";
    switchButton.textContent = "English";
  }
  loadQuestion();
});

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", playAgain);
homeButton.addEventListener("click", restartGame);

// loadQuestion();
