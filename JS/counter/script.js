const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const counter = document.querySelector("#counter");

let counterValue = 0;
increaseBtn.addEventListener("click", () => {
  counterValue++;
  counter.innerText = counterValue;
  if (counterValue > 0) {
    counter.style.color = "#08d008";
  }
});
decreaseBtn.addEventListener("click", () => {
  counterValue--;
  counter.innerText = counterValue;
  if (counterValue < 0) {
    counter.style.color = "red";
  }
});
resetBtn.addEventListener("click", () => {
  counterValue = 0;
  counter.innerText = counterValue;
  counter.style.color = "hsl(209, 61%, 16%)";
});
