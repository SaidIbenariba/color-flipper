const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const mySpanColor = document.querySelector(".color");

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let hexNumber = "#";
  for (let i = 0; i < 6; i++) {
    hexNumber += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexNumber;
  mySpanColor.textContent = hexNumber;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
