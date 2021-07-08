export function createCardComponent(cardData, i) {
  const section = createSection();

  const headingElement = createHeading(cardData, i);

  const questionElement = createQuestion(cardData);

  const answerElement = createAnswer(cardData);

  const buttonElement = createButton(answerElement);

  const tagElement = createTags(cardData);

  const bookmarkElement = createBookmark(cardData);

  section.append(headingElement);
  section.append(bookmarkElement);
  section.append(questionElement);
  section.append(buttonElement);
  section.append(answerElement);
  section.append(tagElement);

  return section;
}

function createSection() {
  const section = document.createElement("section");
  section.classList.add("quiz-card");
  return section;
}

function createHeading(cardData, i) {
  const headingElement = document.createElement("h2");
  headingElement.textContent = `Question: ${i + 1}`;
  return headingElement;
}

function createBookmark(cardData) {
  const bookmarkElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );

  bookmarkElement.innerHTML = `<svg
  class="quiz-card__bookmark"
  id="b3b34146-ac8f-4ba7-beab-b53fb00eed93"
  data-name="Ebene 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
>
  <path
    d="M150,14H50a6,6,0,0,0-6,6V180a6,6,0,0,0,10.61,3.84L100,129.37l45.39,54.47A6,6,0,0,0,156,180V20A6,6,0,0,0,150,14Z"
    fill="var(--body-color)"
    stroke="black"
    stroke-width="0.8rem"
  />
</svg>`;

  bookmarkElement.classList.add("quiz-card__bookmark");

  if (cardData.isBookmarked) {
    bookmarkElement.classList.add("quiz-card__bookmark--active");
  }

  bookmarkElement.addEventListener("click", () => {
    bookmarkElement.classList.toggle("quiz-card__bookmark--active");
  });
  return bookmarkElement;
}

function createQuestion(cardData) {
  const questionElement = document.createElement("p");
  questionElement.textContent = cardData.question;
  questionElement.classList.add("p-text");
  return questionElement;
}
function createAnswer(cardData) {
  const answerElement = document.createElement("p");
  answerElement.textContent = cardData.answer;
  answerElement.classList.add("hide-text", "p-text");
  return answerElement;
}

function createButton(answerElement) {
  const buttonElement = document.createElement("button");
  buttonElement.textContent = "Show answer";
  buttonElement.classList.add("show-hide-answer");

  buttonElement.addEventListener("click", () => {
    answerElement.classList.toggle("hide-text");
    if (buttonElement.textContent === "Show answer") {
      buttonElement.textContent = "Hide answer";
      buttonElement.classList.add("hideanswer");
    } else {
      buttonElement.textContent = "Show answer";
      buttonElement.classList.remove("hideanswer");
    }
  });

  return buttonElement;
}

function createTags(cardData) {
  const tagElement = document.createElement("div");
  const tag = document.createElement("p");
  tag.textContent = cardData.tags;
  tag.classList.add("card_part-tag");

  tagElement.append(tag);

  return tagElement;
}
