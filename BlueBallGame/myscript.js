const targetNumber = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10
let attempts = 0;

const numberSlider = document.getElementById("numberSlider");
const attemptsDisplay = document.getElementById("attempts");
const numberBalls = document.querySelectorAll("#numberRange span");

numberSlider.addEventListener("input", () => {
    const userGuess = parseInt(numberSlider.value);
    attempts++;

    if (userGuess === targetNumber) {
        attemptsDisplay.innerHTML = `Congratulations! You guessed the number ${targetNumber} correctly in ${attempts} attempts.`;
        attemptsDisplay.style.color = "green";
        numberSlider.disabled = true;
        numberBalls[userGuess - 1].style.backgroundColor = "green";
    } else {
        let color = "yellow";
        if (userGuess > targetNumber) {
            color = "red";
        }
        numberSlider.style.background = color;
        attemptsDisplay.innerHTML = `Attempt ${attempts}: Your guess is ${userGuess}. Try again.`;

        if (attempts === 5) {
            attemptsDisplay.innerHTML = `Sorry, you've used all 5 attempts. The correct number was ${targetNumber}.`;
            attemptsDisplay.style.color = "red";
            numberSlider.disabled = true;
        }

        numberBalls[userGuess - 1].style.backgroundColor = color;
    }
});
