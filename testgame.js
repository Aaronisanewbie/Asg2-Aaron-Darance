const wheel = document.getElementById("wheel");
const spinButton = document.querySelector(".spin-button");
const message = document.getElementById("message");
const result = document.getElementById("result");
const spinAgainButton = document.getElementById("spin-again");

let degrees = 0;
let results = [
  "Winning slice 1",
  "Winning slice 2",
  "Winning slice 3",
  "Winning slice 4",
  "Winning slice 5",
  "Winning slice 6",
];

spinButton.addEventListener("click", () => {
  degrees = Math.floor(Math.random() * 360 + 720);
  wheel.style.transform = `rotate(${degrees}deg)`;
  setTimeout(() => {
    message.style.display = "block";
    let winningSlice = Math.floor(degrees / 60);
    result.textContent = results[winningSlice % 6];
  }, 4000);
});

spinAgainButton.addEventListener("click", () => {
  wheel.style.transform = `rotate(0deg)`;
  message.style.display = "none";
});