let colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const mySpanColor = document.querySelector(".color");

const btn = document.querySelector("button");

let stack = [];
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  mySpanColor.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
