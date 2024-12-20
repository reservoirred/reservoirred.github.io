// Function to calculate the arc length
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

    // Display the result
    document.getElementById('arc-length').innerText = `Arc Length: ${arcLength.toFixed(2)} inches`;
}
