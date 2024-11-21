const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "=") {
      input.value = eval(input.value);
    } else if (e.target.innerText === "AC") {
      input.value = "";
      showing0();
    } else if (e.target.innerText === "DE") {
      input.value = input.value.slice(0, -1);
    } else {
      console.log(e);
      hiding0();
      input.value += button.innerText;
    }
  });
});

const hiding0 = () => {
  document.querySelector(".calculation").style.display = "block";
  document.querySelector(".displaying-0").style.display = "none";
};

const showing0 = () => {
  document.querySelector(".calculation").style.display = "none";
  document.querySelector(".displaying-0").style.display = "block";
};


