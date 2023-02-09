const spinButton = document.querySelector("#spin-button");
const result = document.querySelector("#result");
const wheel = document.querySelector(".wheel");

spinButton.addEventListener("click", function() {
  let randomDegree = Math.floor(Math.random() * 360);
  wheel.style.transform = `rotate(${randomDegree}deg)`;

  let rewards = [1, 2, 3, 4, 5, 6];
  let sliceDegree = 360 / rewards.length;

  let resultIndex = Math.floor(randomDegree / sliceDegree);
  result.textContent = `You won: ${rewards[resultIndex]}`;
});