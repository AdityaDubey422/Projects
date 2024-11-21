const button = document.querySelector("button"); //  utton ko select kara
let currTheme; // current theme variable bana diya
let colorScheme = window.matchMedia("(prefers-color-scheme : dark)"); // ye check karega user ki color preference (it returns media query list chahe to console.log(colorScheme)  karke dekh lo and online padh lo)

const changeButton = () => {
  // button ke andar ka text badlega agar light mode hoga to button kahega switch to dark mode aur agar dark mode hua to  utton kahega switch to light mode
  let switchTo = currTheme === "dark" ? "light" : "dark";
  button.lastElementChild.innerText = `switch to ${switchTo} mode`;

  // we can aslo control displaying of dark mode and light mode icon through js
  /*if (switchTo === "light") {
    button.firstElementChild.style.display = "none";
    button.firstElementChild.nextElementSibling.style.display = "block";
  } else {
    button.firstElementChild.style.display = "block";
    button.firstElementChild.nextElementSibling.style.display = "none";
  }*/
};

const changeColorScheme = () => {
  // ye function user ke color preference ke hisaab se color scheme badlega
  if (colorScheme.matches) {
    currTheme = "dark";
    document.body.classList.add("dark-mode");
    changeButton();
  } else {
    currTheme = "light";
    document.body.classList.remove("dark-mode");
    changeButton();
  }
};

changeColorScheme(); // ek baar invoke karna jaaki jab user land kare tab website user preference ke hisaab se he set hoye
colorScheme.addEventListener("change", changeColorScheme); //fir change event listener add karna and jaaki jitni baar bhi user apni prefered color scheme change kare ye track kare aur changeCOlorScheme functionn ko call kare and then vo function colot ko badal de

button.addEventListener("click", () => {
  // ye button par click karne par theme badle uske liye hai
  if (currTheme === "dark") {
    currTheme = "light";
    document.body.classList.remove("dark-mode");
    changeButton();
  } else {
    currTheme = "dark";
    document.body.classList.add("dark-mode");
    changeButton();
  }
});
