// Function to check if user preferences are stored in localStorage and apply them
function checkUserPreferences() {
    const isAnimationEnabled = localStorage.getItem('animationEnabled');
    
    if (isAnimationEnabled === 'true') {
        document.body.classList.add('animate');
    }
}

// Event listener for button to trigger animation and save preference in localStorage
document.getElementById('animateButton').addEventListener('click', () => {
    const box = document.getElementById('box');
    
    // Trigger the animation by adding the class to the box
    box.classList.add('animate');
    
    // Store the user preference in localStorage
    localStorage.setItem('animationEnabled', 'true');
});

// Initialize user preferences on page load
checkUserPreferences();
