const btn=document.getElementById("submit");
const next=document.getElementById("next");
let ques=document.getElementById("Question");

const quizQues = [
  {
    question: "What is the difference between the push() and unshift() methods?",
    options: [
      "push() adds to the end; unshift() adds to the beginning.",
      "push() adds to the beginning; unshift() adds to the end.",
      "push() removes from the end; unshift() removes from the beginning.",
      "push() modifies the array; unshift() returns a new array."
    ]
  },
  {
    question: "How do slice() and splice() differ when manipulating an array?",
    options: [
      "slice() modifies the original array; splice() does not.",
      "slice() returns a shallow copy and does not change the original; splice() modifies the original array.",
      "They are identical, but splice() is deprecated.",
      "slice() works only on strings; splice() works only on arrays."
    ]
  },
  {
    question: "What are the key differences between map() and forEach()?",
    options: [
      "forEach() returns a new array; map() does not.",
      "map() returns a new array; forEach() executes a function on each element and returns undefined.",
      "map() can only handle numbers; forEach() can handle any data type.",
      "forEach() executes asynchronously; map() executes synchronously."
    ]
  },
  {
    question: "How can you easily remove duplicate values from a JavaScript array?",
    options: [
      "Using the Array.duplicate() built-in method.",
      "By passing the array into `new Set(array)` and spreading it back into a new array.",
      "Using a standard for loop with the shift() method.",
      "By converting the array into a JSON string."
    ]
  },
  {
    question: "What does the reduce() method do?",
    options: [
      "It reduces the size of the array by half.",
      "It filters out elements that do not match a specific criteria.",
      "It executes a reducer function on each element, resulting in a single summary output value.",
      "It sorts the array in descending order."
    ]
  }
];

const i=0;

function que(){
    ques.textContent=`${quizQues[i].question}`;
}

function start(){
    alert("clicked");
    window.open("quizQue.html","");
    que();
}

function Next(){
    alert("Next Was Clicked");
    i++;
    que();
}