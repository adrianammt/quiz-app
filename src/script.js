// --For the Landingpage and the Bookmark--

const showHideButton = document.querySelectorAll(".show-hide-answer");

const showAnswer = document.querySelectorAll(".answer-text");
const bookmark = document.querySelectorAll(".quiz-card__bookmark");

//This shows and hides answer + changes button text and color at landing page and bookmark page
for (let i = 0; i < showHideButton.length; i++) {
  showHideButton[i].addEventListener("click", () => {
    const show = showAnswer[i].classList.toggle("show-text");
    if (showHideButton[i].textContent === "Show answer") {
      showHideButton[i].textContent = "Hide answer";
      showHideButton[i].classList.add("hideanswer");
    } else {
      showHideButton[i].textContent = "Show answer";
      showHideButton[i].classList.remove("hideanswer");
    }
  });
}

//This changes the bookmark on toggle at landing page and bookmark page
for (let k = 0; k < bookmark.length; k++) {
  bookmark[k].addEventListener("click", () => {
    bookmark[k].classList.toggle("quiz-card__bookmark--active");
  });
}
// --This is for the create page --
const dataNewQuestion = [];

const formElement = document.querySelector(".create-card");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = formElement.addQuestion.value;
  const answer = formElement.addAnswer.value;
  const tags = formElement.addTags.value;

  const newQuestion = {
    question,
    answer,
    tags,
  };

  dataNewQuestion.push(newQuestion);
  console.log(dataNewQuestion);

  formElement.reset();
});
