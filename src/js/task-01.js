const categories = document.querySelectorAll("li.item").length;
console.log(`Number of categories: ${categories}`);

const itemEl = document.querySelectorAll("li.item");

for (const el of itemEl) {
  console.log(`Category: ${el.children[0].innerText}`);
  console.log(`Elements: ${el.children[1].children.length}`);
}
