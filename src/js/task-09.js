const spanColorEl = document.querySelector(".color");
const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnEl.addEventListener("click", () => {
  bodyEl.style.background = getRandomHexColor();
  spanColorEl.textContent = getRandomHexColor();
});
