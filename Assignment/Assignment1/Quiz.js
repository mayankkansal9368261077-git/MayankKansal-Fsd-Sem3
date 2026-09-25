const quizQues = [
  {
    question: "What is the difference between the push() and unshift() methods?",
    options: [
      "push() adds to the end; unshift() adds to the beginning.",
      "push() adds to the beginning; unshift() adds to the end.",
      "push() removes from the end; unshift() removes from the beginning.",
      "push() modifies the array; unshift() returns a new array."
    ],
    answer: "option1"
  },
  {
    question: "How do slice() and splice() differ when manipulating an array?",
    options: [
      "slice() modifies the original array; splice() does not.",
      "slice() returns a shallow copy and does not change the original; splice() modifies the original array.",
      "They are identical, but splice() is deprecated.",
      "slice() works only on strings; splice() works only on arrays."
    ],
    answer: "option2"
  },
  {
    question: "What are the key differences between map() and forEach()?",
    options: [
      "forEach() returns a new array; map() does not.",
      "map() returns a new array; forEach() executes a function on each element and returns undefined.",
      "map() can only handle numbers; forEach() can handle any data type.",
      "forEach() executes asynchronously; map() executes synchronously."
    ],
    answer: "option2"
  },
  {
    question: "How can you easily remove duplicate values from a JavaScript array?",
    options: [
      "Using the Array.duplicate() built-in method.",
      "By passing the array into `new Set(array)` and spreading it back into a new array.",
      "Using a standard for loop with the shift() method.",
      "By converting the array into a JSON string."
    ],
    answer: "option2"
  },
  {
    question: "What does the reduce() method do?",
    options: [
      "It reduces the size of the array by half.",
      "It filters out elements that do not match a specific criteria.",
      "It executes a reducer function on each element, resulting in a single summary output value.",
      "It sorts the array in descending order."
    ],
    answer: "option2"
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizQues[currentQuestion];

  document.getElementById("Question").textContent = question.question;
  question.options.forEach((option, index) => {
    document.getElementById(`option${index + 1}-label`).textContent = option;
  });
  document.getElementById("question-number").textContent =
    `Question ${currentQuestion + 1} of ${quizQues.length}`;
  document.querySelectorAll("input[name='options']").forEach((input) => {
    input.checked = false;
  });
}

function nextQuestion() {
  const selectedOption = document.querySelector("input[name='options']:checked");

  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer first.";
    return;
  }

  if (selectedOption.value === quizQues[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion === quizQues.length) {
    alert(`Quiz complete! Your score is ${score} / ${quizQues.length}.`);
    window.location.href = "Quiz.html";
    return;
  }

  showQuestion();
  document.getElementById("feedback").textContent = "";
}

function startQuiz(event) {
  event.preventDefault();
  window.location.href = "quizQue.html";
}

function initializePage() {
  const form = document.getElementById("form");
  const nextButton = document.getElementById("next");

  if (form) {
    form.addEventListener("submit", startQuiz);
  }

  if (nextButton) {
    nextButton.addEventListener("click", nextQuestion);
    showQuestion();
  }
}

document.addEventListener("DOMContentLoaded", initializePage);