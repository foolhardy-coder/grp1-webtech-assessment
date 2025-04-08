// Decoding-related functions
function updateDecodedMessage() {
    const scrambledMessage = document.getElementById('customScrambledMessageInput').value.trim().toLowerCase();
    // Convert the scrambled message to lowercase and remove whitespace

    const assignedLetters = Array.from(document.querySelectorAll('.assigned-letter')).reduce((acc, input) => {
        // Target all inputs  with the class assigned-letter
        const scrambledLetter = input.dataset.letter;
        // Get the input from data-letter attribute
        const assignedLetter = input.value.toLowerCase();
        // Convert the assigned letter to lowercase
        if (assignedLetter) {
            // Check if the assigned letter is not empty
            acc[scrambledLetter] = assignedLetter;
            // Map the scrambled letter to the assigned letter
        }
        return acc;
        // Save and return the updated mapping
    }, {});

    const decodedMessage = scrambledMessage.replace(/./g, char => assignedLetters[char] || char);
    // Use .replace() function to directly map and replace characters
    // regex will match all characters found in assignedLetters
    // but if not found, it will return the original character

    document.getElementById('customDecodedOutput').textContent = decodedMessage;
    // Updates the output with the decoded message
}

// Set up event listeners to ensure scripts only run after everything is loaded
window.addEventListener('DOMContentLoaded', () => {
    const scrambledInput = document.getElementById('customScrambledMessageInput');
    // Get the input field for the scrambled message
    const container = document.getElementById('assignedLettersContainer'); 
    // Get the container for assigned letters

    scrambledInput.addEventListener('input', updateDecodedMessage);
    // Listen for any changes in the message input field

    container.addEventListener('input', event => {
        // Check for any input across all assigned-letter inputs
        if (event.target.classList.contains('assigned-letter')) {
            // Check if the input is one of the assigned-letter inputs
            updateDecodedMessage();
            // Then call the update function to decode the message
        }
    });
});