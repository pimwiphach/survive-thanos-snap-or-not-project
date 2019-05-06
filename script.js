const snapResults = [
  {
    result: "Sorry, you aren't. Hope they can remember you."
  },
  {
    result: "Yes, you survived 100%!"
  },
  {
    result: "Hahaha, you're dead!"
  },
  {
    result: "Are you kidding? You're dead!"
  },
  {
    result: "Thanos has mercy on you. You survived!"
  },
  {
    result: "Not today."
  }
];
const snapBtn = document.querySelector("#snapBtn");
const snapResult = document.querySelector("#snapResult");

snapBtn.addEventListener("click", displayResult);

function displayResult() {
  let number = Math.floor(Math.random() * snapResults.length);
  snapResult.innerHTML = snapResults[number].result;
}
