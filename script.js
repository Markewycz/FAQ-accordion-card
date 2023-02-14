const questions = document.querySelectorAll(".question");
const questionContainer = document.querySelector(".faq");
const answers = document.querySelectorAll(".answer");
const arrows = document.querySelectorAll(".arrow");

questionContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".question");

  if (!clicked) return;

  if (clicked.classList.contains("question--active")) {
    // Remove clicked active question
    clicked.classList.remove("question--active");
    document
      .querySelector(`.answer--${clicked.dataset.question}`)
      .classList.remove("answer--active");
    document
      .querySelector(`.arrow--${clicked.dataset.question}`)
      .classList.remove("arrow--up");
  } else {
    // Remove active questions
    questions.forEach((q) => q.classList.remove("question--active"));
    answers.forEach((a) => a.classList.remove("answer--active"));
    arrows.forEach((arrow) => arrow.classList.remove("arrow--up"));

    // Activate question
    clicked.classList.toggle("question--active");

    // Activate answer
    document
      .querySelector(`.answer--${clicked.dataset.question}`)
      .classList.toggle("answer--active");
    document
      .querySelector(`.arrow--${clicked.dataset.question}`)
      .classList.toggle("arrow--up");
  }
});

// const questions = document.querySelectorAll(".question");
// const questionContainer = document.querySelector(".faq");
// const answers = document.querySelectorAll(".answer");
// const arrows = document.querySelectorAll(".arrow");

// function toggleQuestion(activeQuestion) {
//   const answer = document.querySelector(
//     `.answer--${activeQuestion.dataset.question}`
//   );
//   const arrow = document.querySelector(
//     `.arrow--${activeQuestion.dataset.question}`
//   );

//   activeQuestion.classList.toggle("question--active");
//   answer.classList.toggle("answer--active");
//   arrow.classList.toggle("arrow--up");
// }

// questionContainer.addEventListener("click", function (e) {
//   const activeQuestion = e.target.closest(".question");

//   if (!activeQuestion) {
//     return;
//   }

//   if (activeQuestion.classList.contains("question--active")) {
//     toggleQuestion(activeQuestion);
//   } else {
//     questions.forEach((q) => toggleQuestion(q));
//   }
// });
