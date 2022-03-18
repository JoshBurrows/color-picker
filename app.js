const colors = [];
let colorIndex = 0;
const getColorBtn = document.getElementById("btn");

// Generate Random Number //
function randomNumber(num) {
  return Math.floor(Math.random() * num);
}
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const header = document.querySelector("h1");
function setColors() {
  const r = randomNumber(255);
  const g = randomNumber(255);
  const b = randomNumber(255);
  rgbValue = `rgb(${r}, ${g}, ${b})`;
  hexColor = rgbToHex(r, g, b);
  document.body.style.backgroundColor = hexColor;
  header.innerText = `This rgb color is: ${rgbValue}
   This hex color is: ${hexColor}`;
}

getColorBtn.addEventListener("click", setColors);
