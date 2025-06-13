// Generate the target number ONCE when the game starts

let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessCheck() {
  let userInput = parseInt(document.querySelector("#guess-input").value, 10);
  const replyBox = document.querySelector(".reply");

  // Input validation
  if (isNaN(userInput) || userInput < 1 || userInput > 100) {
    replyBox.innerText = "Please enter a valid number between 1 and 100!";
    return;
  }

  attempts++;

  if (userInput === targetNumber) {
    replyBox.classList.add("success");
    replyBox.innerText = `🎉 Perfect! You guessed "${targetNumber}"   in   ${attempts}   attempts!`;
  } else if (Math.abs(userInput - targetNumber) < 3) {
    replyBox.classList.remove("success");
    replyBox.innerText = `Your guess (${userInput}) really close. With a range of +/-3`;
  } else if (userInput > targetNumber) {
    replyBox.classList.remove("success");
    replyBox.innerText = `Your guess (${userInput}) is too high. Try a smaller number!`;
  } else {
    replyBox.classList.remove("success");
    replyBox.innerText = `Your guess (${userInput}) is too low. Try a larger number!`;
  }
}

// Get the form element
const form = document.getElementById("guess-form");

// Add event listener to prevent default form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // This stops the page reload!
  guessCheck(); // Call your game logic function
});

function addValue() {
  let userInput =
    parseInt(document.querySelector("#guess-input").value, 10) || 0;
  if (userInput < 100)
    document.querySelector("#guess-input").value = userInput + 1;
}

function subtractValue() {
  let userInput =
    parseInt(document.querySelector("#guess-input").value, 10) || 0;
  if (userInput > 1)
    document.querySelector("#guess-input").value = userInput - 1;
}

const toggleBtn = document.querySelector(".toggle-btn");
toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  toggleBtn.textContent = document.body.classList.contains("light-theme")
    ? "Light"
    : "Dark";
});
