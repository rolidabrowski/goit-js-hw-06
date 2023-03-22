const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient) {
  const createItem = document.createElement("li");
  createItem.textContent = `${ingredient}`;
  createItem.classList.add("item");
  list.append(createItem);
  return createItem;
});

// const list = document.querySelector("#ingredients");
// const item = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");

// list.innerHTML = item;
