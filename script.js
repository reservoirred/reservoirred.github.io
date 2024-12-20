// Function to calculate the arc length, chord length, and their difference
function calculateArcLength() {
    // Get input values
    const radius = parseFloat(document.getElementById('radius').value);
    const angle = parseFloat(document.getElementById('angle').value);

    // Validate inputs
    if (isNaN(radius) || isNaN(angle) || radius <= 0 || angle <= 0) {
        alert('Please enter valid positive numbers for both radius and angle.');
        return;
    }

    // Convert angle from degrees to radians
    const angleInRadians = angle * (Math.PI / 180);

    // Calculate the arc length (Arc Length = radius * angle in radians)
    const arcLength = radius * angleInRadians;

    // Calculate the chord length (Chord Length = 2 * radius * sin(angle / 2))
    const chordLength = 2 * radius * Math.sin(angleInRadians / 2);

    // Calculate the difference between arc length and chord length
    const difference = arcLength - chordLength;

    // Display the results
    document.getElementById('arc-length').innerText = `Arc Length: ${arcLength.toFixed(2)} inches`;
    document.getElementById('chord-length').innerText = `Chord Length: ${chordLength.toFixed(2)} inches`;
    document.getElementById('difference').innerText = `Difference: ${difference.toFixed(2)} inches`;
}
