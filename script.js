document.addEventListener("DOMContentLoaded", function() {

    // Get form element by id
    const form = document.getElementById('registration-form');

    const feedbackDiv = document.getElementById('form-feedback');

    // Form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault()  // Prevent the form from submitting to the server.

        // Input Retrieval, Trimming, and Validation

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Retrival and validation for the username element
        const usernameInput = document.getElementById('username').value.trim();
        if (usernameInput.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Retrival and validation for the email element
        const emailInput = document.getElementById('email').value.trim();
        if (!emailInput.includes('@') || !emailInput.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address');
        }

        // Retrival and validation for the password element.
        const passwordInput = document.getElementById('password').value.trim();
        if (passwordInput.length < 8) {
            isValid = false;
            messages.push('Password must at least 8 characters long.');
        }

        // Displaying Feedback
        feedbackDiv.style.display = "block";

        if (isValid) {
            feedbackDiv.innerHTML = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });

});
