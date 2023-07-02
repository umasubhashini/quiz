// Define the quiz questions and answers
const quizData = [
  {
    question: "Where does Uma currently live?",
    choices: ["Palakollu", "Bhimavaram", "Vijayawada", "Amalapuram"],
    correctAnswer: "Palakollu"
  },
  {
    question: "Which year is Uma currently pursuing?",
    choices: ["First", "Second", "Third", "Fourth"],
    correctAnswer: "Third"
  },
  {
    question: "What is Uma's CGPA?",
    choices: ["9.2", "8.56", "9.01", "8.97"],
    correctAnswer: "8.97"
  },
  {
    question: "What is Uma's field of study or academic major?",
    choices: ["CSE", "CSD", "CSBS", "IT"],
    correctAnswer: "CSD"
  },
  // Add more questions and choices as needed
];

// Initialize variables
let currentQuestion = 0;
let score = 0;

// Get HTML elements
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

// Display the current question and choices
function displayQuestion() {
  const currentQuizQuestion = quizData[currentQuestion];
  questionElement.textContent = currentQuizQuestion.question;

  choicesElement.innerHTML = "";

  currentQuizQuestion.choices.forEach(choice => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", () => selectAnswer(choice));
    choicesElement.appendChild(choiceButton);
  });
}

// Select the answer and check if it is correct
function selectAnswer(answer) {
  const currentQuizQuestion = quizData[currentQuestion];
  const choiceButtons = choicesElement.getElementsByTagName("button");

  if (answer === currentQuizQuestion.correctAnswer) {
    score++;
    choiceButtons[currentQuestion].classList.add("correct");
  } else {
    choiceButtons[currentQuestion].classList.add("incorrect");

    // Find the correct answer and highlight it
    for (let i = 0; i < currentQuizQuestion.choices.length; i++) {
      if (currentQuizQuestion.choices[i] === currentQuizQuestion.correctAnswer) {
        choiceButtons[i].classList.add("correct");
        break;
      }
    }
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

// Display the final result
function displayResult() {
  questionElement.textContent = "";
  choicesElement.innerHTML = "";
  submitButton.style.display = "none";

  resultElement.textContent = `You scored ${score} out of ${quizData.length}!`;
}

// Start the quiz
displayQuestion();

