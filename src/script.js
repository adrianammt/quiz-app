//-- For the Landingpage and the Bookmark --

const showHideButton = document.querySelectorAll(".show-hide-answer");

const showAnswer = document.querySelectorAll(".answer-text");
const bookmark = document.querySelectorAll(".quiz-card__bookmark");

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

for (let k = 0; k < bookmark.length; k++) {
  bookmark[k].addEventListener("click", () => {
    bookmark[k].classList.toggle("quiz-card__bookmark--active");
  });
}
