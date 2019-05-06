const snapResults = [
  {
    result: "No"
  },
  {
    result: "Yes, you survived!"
  },
  {
    result: "Hahaha, you're dead!"
  },
  {
    result: "Are you kidding? You're dead!"
  },
  {
    result: "Great for you. You survived!"
  },
  {
    result: "Not today"
  }
];
const snapBtn = document.querySelector("#snapBtn");
const snapResult = document.querySelector("#snapResult");
const result = document.querySelector("#result");

quoteBtn.addEventListener("click", displayResult);

function displayResult() {
  let number = Math.floor(Math.random() * snapResults.length);
  snapResult.innerHTML = snapResults[number].result;
}
