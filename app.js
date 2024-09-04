function guessNumber() {
  let target = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let maxAttempts = 3;

  function resetGame() {
    maxAttempts = 3;
    attempts = 0;
    document.getElementById("win-notice").innerText = "";
    document.getElementById("notice").innerText = "";
    document.getElementById("attempt-notice").innerText =
      maxAttempts - attempts;
    document.getElementById("attempt-notice-main").innerText = "Play again";

    target = Math.floor(Math.random() * 10) + 1;
  }
  console.log(target);
  document.getElementById("try").addEventListener("click", function () {
    let guess = parseInt(document.getElementById("gess").value, 10);
    // console.log(target);
    // console.log(maxAttempts - attempts);

    if (guess <= 10) {
      attempts++;
      if (attempts <= maxAttempts) {
        document.getElementById("attempt-notice-main").innerText = "";
        document.getElementById("attempt-notice").innerText =
          maxAttempts - attempts;
        document.getElementById("win-notice").innerText = "";

        if (guess < target) {
          document.getElementById("notice").innerText = "Too low!";
        } else if (guess > target) {
          document.getElementById("notice").innerText = "Too high!";
        } else {
          document.getElementById("notice").innerText = "";
          document.getElementById("attempt-notice-main").innerText = "";
          document.getElementById(
            "win-notice"
          ).innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;

          setInterval(() => {
            resetGame();
          }, 5000);

          document.getElementById("reset").addEventListener("click", resetGame);
          document.getElementById("attempt-notice-main").innerText = "";
        }
      } else {
        document.getElementById("attempt-notice-main").innerText =
          "No more chances! You lose.";
        document.getElementById("notice").innerText = "";
        document.getElementById("reset").addEventListener("click", resetGame);
      }
    } else {
      document.getElementById("attempt-notice-main").innerText =
        "Number must be 1-10 range";
      document.getElementById("notice").innerText = "";
    }

    document.getElementById("gess").value = "";
  });

  document.getElementById("reset").addEventListener("click", resetGame);
}

guessNumber();



