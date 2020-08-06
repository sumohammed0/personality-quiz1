//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var relaxedScore = 0;
var thoughtfulScore = 0;
var energeticScore = 0;
var stressedScore = 0;

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//use DOM to create variable for 2nd question.
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//use DOM to create variable for 3rd question.
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

//use DOM to create variable for 4th question.
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

//use DOM to create variable for 5th question.
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

//variable for result
var result = document.getElementById("result");

//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", relaxed);
q1a2.addEventListener("click", thoughtful);
q1a3.addEventListener("click", energetic);
q1a4.addEventListener("click", stressed);

q2a1.addEventListener("click", relaxed);
q2a2.addEventListener("click", thoughtful);
q2a3.addEventListener("click", energetic);
q2a4.addEventListener("click", stressed);

q3a1.addEventListener("click", relaxed);
q3a2.addEventListener("click", thoughtful);
q3a3.addEventListener("click", energetic);
q3a4.addEventListener("click", stressed);

q4a1.addEventListener("click", relaxed);
q4a2.addEventListener("click", thoughtful);
q4a3.addEventListener("click", energetic);
q4a4.addEventListener("click", stressed);

q5a1.addEventListener("click", relaxed);
q5a2.addEventListener("click", thoughtful);
q5a3.addEventListener("click", energetic);
q5a4.addEventListener("click", stressed);

//#TODO: Define quiz functions here
function relaxed() {
  relaxedScore += 1;
  questionCount += 1;
  //alert("maybe relaxed");
  if (questionCount >= 5) {
    updateResult();
  }
}
function thoughtful() {
  thoughtfulScore += 1;
  questionCount += 1;
  //alert("maybe thoughtful");

  if (questionCount >= 5) {
    updateResult();
  }
}
function energetic() {
  energeticScore += 1;
  questionCount += 1;
  //alert("maybe energetic");

  if (questionCount >= 5) {
    updateResult();
  }
}
function stressed() {
  stressedScore += 1;
  questionCount += 1;
  //alert("maybe stressed!");

  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult() {
  if (relaxedScore >= 3) {
    result.innerHTML = "you're feeling either relaxed or lazy";
  } else if (thoughtfulScore >= 3) {
    result.innerHTML = "you're feeling thoughtful";
  } else if (energeticScore >= 3) {
    result.innerHTML = "you're feeling energetic or happy";
  } else if (stressedScore >= 3) {
    result.innerHTML = "you're feeling stressed or anxious";
  } else {
    result.innerHTML =
      "hope you're doing okay! you're mood is all over the place try again in a bit :)";
  }
}
