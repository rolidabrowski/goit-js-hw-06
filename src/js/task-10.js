function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const divBoxes = document.getElementById("boxes");

let StartSize = 30;
const createBoxes = (amount) => {
  const array = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = StartSize + "px";
    newDiv.style.height = StartSize + "px";
    StartSize += 10;
    newDiv.style.background = getRandomHexColor();
    array.push(newDiv);
  }
  return array;
};

btnCreate.addEventListener("click", () => {
  let boxesToAdd = createBoxes(inputEl.value);
  divBoxes.append(...boxesToAdd);
});

btnDestroy.addEventListener("click", () => {
  divBoxes.remove();
});
