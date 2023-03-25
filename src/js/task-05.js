const textInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", function () {
  let name = textInputEl.value;
  name === ""
    ? (outputEl.textContent = `Anonymous`)
    : (outputEl.textContent = `${name}`);
});
