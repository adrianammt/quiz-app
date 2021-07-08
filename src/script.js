import { createCardComponent } from "../lib/card.js";
import { getQuestionCards } from "../lib/db.js";

const mainElement = document.querySelector("main");

//Render cards coming from input

const dataFromLocalStorage = getQuestionCards();

dataFromLocalStorage.forEach((cardData, i) => {
  const cardComponent = createCardComponent(cardData, i);
  mainElement.append(cardComponent);
});
