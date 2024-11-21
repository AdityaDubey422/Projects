const colorBox = document.querySelector(".color-box");
const colorCode = document.querySelector(".color-code");
const button = document.querySelector("button");

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// My method (maine khud se socha hai bhai badmoshi nahi)
// const genRandColor = () => {
//   let pos1 = array[Math.floor(Math.random() * 16)];
//   let pos2 = array[Math.floor(Math.random() * 16)];
//   let pos3 = array[Math.floor(Math.random() * 16)];
//   let pos4 = array[Math.floor(Math.random() * 16)];
//   let pos5 = array[Math.floor(Math.random() * 16)];
//   let pos6 = array[Math.floor(Math.random() * 16)];

//   return `#${pos1}${pos2}${pos3}${pos4}${pos5}${pos6}`;
// };
// let hexcode = genRandColor();
// document.body.style.backgroundColor = hexcode;
// colorBox.style.backgroundColor = hexcode;
// colorCode.innerText = hexcode;

// button.addEventListener("click", () => {
//   let hexcode = genRandColor();
//   document.body.style.backgroundColor = hexcode;
//   colorBox.style.backgroundColor = hexcode;
//   colorCode.innerText = hexcode;
// });

// Youtube method
function randomColor() {
  let hexcode = "#";
  for (let i = 1; i <= 6; i++) {
    hexcode += array[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = hexcode;
  colorBox.style.backgroundColor = hexcode;
  colorCode.innerText = hexcode;
}
button.addEventListener("click", randomColor);

//page pe jab land karo to background ka color randomly aaye uske liye ek baar invoke kar daalo:-
randomColor();


//Learning : ye += waala operator yaad rakhna jab bhi looop chale aur hal value jo aa ri hai usse kahi na mkahi tume rakhna hai to += operator ko use karo to vo har value ko add karta jaaygea uss variable me