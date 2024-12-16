// Get references to the button and result display
const rollButton = document.getElementById('rollButton');
const resultDisplay = document.getElementById('result');

// Add an event listener to the button
rollButton.addEventListener('click', function() {
    // Generate a random number between 1 and 6
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    // Display the result in the result element
    resultDisplay.textContent = randomNumber;
});
