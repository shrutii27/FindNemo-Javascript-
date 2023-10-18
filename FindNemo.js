const circles = document.querySelectorAll('.circle');
const attemptsDisplay = document.getElementById('attempts');
const messageDisplay = document.getElementById('message');

let nemoCircle = Math.floor(Math.random() * 10);
let attempts = 6;
let gameIsOver = false; // Add a variable to track if the game is over

circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
        if (attempts <= 0 || gameIsOver) { // Check if attempts are exhausted or the game is over
            return;
        }

        attempts--;
        attemptsDisplay.textContent = attempts;

        if (index === nemoCircle) {
            circle.style.backgroundImage = 'url("nemo1.jpg")';
            messageDisplay.textContent = 'Congratulations! You Win..!!';
            gameIsOver = true; // Set gameIsOver to true
        } else {
            circle.classList.add('clicked');
            if (attempts === 0) {
                messageDisplay.textContent = 'Sorry, You Loose..!!';
            }
        }
    });
});
