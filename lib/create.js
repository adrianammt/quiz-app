import { addQuestionCards } from "../lib/db.js";

const formElement = document.querySelector(".create-card");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const question = formElement.addQuestion.value;
  const answer = formElement.addAnswer.value;
  const tags = formElement.addTags.value.split(",");

  const newQuestion = {
    question,
    answer,
    tags,
  };

  console.log(newQuestion);

  addQuestionCards(newQuestion);

  formElement.reset();
});
