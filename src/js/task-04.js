const incrementCount = document.querySelector('[data-action="increment"]');
const decrementCount = document.querySelector('[data-action="decrement"]');

const totalCount = document.querySelector("#value");
var count = 0;
totalCount.innerHTML = count;

const handleIncrement = () => {
  totalCount.innerHTML = ++count;
};

const handleDecrement = () => {
  totalCount.innerHTML = --count;
};

incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
